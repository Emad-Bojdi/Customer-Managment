import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";


async function handler(req, res) {
    try {
        await connectDB();
    } catch (err) {
        console.log(err);
        res.status(200).json({ status: "success", message: "Error in connecting to database" });
        return;
    }

    if (req.method === "GET") {
        const id = req.query.customerId;
        try {
            const customer = await Customer.findById(id);
            res.status(200).json({ status:"success" , message: "Data received successfully" , data:customer})

        } catch (error) {
            res.status(500).json({ status: "failed", message: "Error in retrieving data from database" })
        }
    }
}

export default handler;
