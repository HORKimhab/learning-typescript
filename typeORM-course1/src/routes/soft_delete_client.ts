import router from "./router";
import { Client } from '../entities/Client';
import { Transaction } from '../entities/Transaction';

router.delete("/api/client/:clientId", async (req, res) => {
    const { clientId } = req.params; 
    const client = await Client.findOne({
        where: {id: parseInt(clientId, 10)}, 
        relations: ['transactions'],
    }, 
    );

    if(client){
        await Client.softRemove(client);
        // client.deletedAt = new Date();
        // await Client.save(client);

        // Soft delete related transactions
        if (client.transactions) {
            for (const transaction of client.transactions) {
                await Transaction.softRemove(transaction);
            }
        }

        return res.json({
            msg: 'Client is deleted...'
        });
    }

    return res.json({
        msg: 'Something went wrong...'
    });
}); 

export { router as softDelteClientRouter };