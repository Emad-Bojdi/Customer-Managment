import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB"

export default async function handler(req, res) {
    try {
        await connectDB();

    } catch (err) {
        console.log(err);
        res.status(500).json({status: "success", message: "Error in connecting to database"});
        return;
    }

    if (req.method === "DELETE") {
        const id = req.query.customerId;
        try {
            await Customer.findByIdAndDelete(id);
            res.status(200).json({status:"success", message: "Data deleted"});
        } catch (error) {
            console.log(error);
            res.status(500).json({status:"failed", message: "Error in deleting user from database"});
        }
    }
    if (req.method === "PATCH"){
        const id = req.query.customerId;
        const body = req.body
        try {
            const editedCustomer = await Customer.findById(id);
            res.status({status:200, message:""})
        } catch (error) {
            
        }
    }
}


