import router from "./router";
import { Client } from '../entities/Client';

router.get("/api/client/:clientId", async (req, res) => {
    const { clientId } = req.params; 

    const client = await Client.findOne({
        //TODO
        // relations: ['transactions'],
        where: {id: parseInt(clientId, 10)},
        select: ['first_name'],
    });
	return res.json(client);

    //TODO 
    //Not work
    // const client = await dataSource
    // .getRepository(Client)
    // .createQueryBuilder("client")
    // .select('first_name')
    // .addSelect('balance')
    // .from(Client, 'client')
    // .where('balance >= :minBalance AND ', { balance: 2})
    // .getMany()

    // return res.json(client);
}); 

export { router as getClientRouter };