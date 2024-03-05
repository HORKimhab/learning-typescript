import router from "./router";
import { Transaction, TransactionTypes } from '../entities/Transaction';
import { Client } from '../entities/Client';

router.post("/api/client/:clientId/transaction", async (req, res) => {
    const { clientId } = req.params; 
    const { type, amount } = req.body; 
    const client = await Client.findOne({
        where: {id: parseInt(clientId, 10)}
    });

    if(!client){
        return res.json({ msg: "Something went wrong...!"})
    }

    const transaction = Transaction.create({
        amount, 
        type, 
        client, //cleint_id: client.id
    }); 

    await transaction.save(); 

    if(type === TransactionTypes.DEPOSIT){
        client.balance = Number(client.balance) + amount; 
    } else if (type === TransactionTypes.WITHDRAW){
        client.balance = Number(client.balance) - amount; 
    }

    await client.save(); 

    return res.json({
        msg: "Transcatio created..."
    });
})

export { router as createTransactionRouter };
