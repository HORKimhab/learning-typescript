import express from "express"; 
import { Banker } from "../entities/Banker";

const router = express.Router(); 

router.post('/api/banker', async (req, res) => {
    const { 
        firstName, 
        lastName, 
        email, 
        cardNumber, 
        employeeNumber,
    } = req.body;

    const data = Banker.create({
        first_name: firstName,
        last_name: lastName,
        email, 
        card_number: cardNumber, 
        employee_number: employeeNumber,       
    });

    await data.save(); 

    return res.json(data);

})

export { router as createBankerRouter }

