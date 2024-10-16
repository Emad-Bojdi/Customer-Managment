import { Schema, model , models }  from "mongoose";

const customerSchema = new Schema({
    name:{
        type: String,
        required: true,
        minLength: 3,
    },
    lastName:{
        type: String,
        required: true,
        minLength: 1
    },
    email:{
        type: String,
        required: true,
    },
    phone: String,
    address: String,
    postalCode: String,
    date: Date,
    products:{
        type: Array,
        default: [],
    },
    createdAt:{
        type: Date,
        default: () => Date.now(),
        immutable:true
    },
    updateAt: {
        type: Date,
        default: () => Date.now()
    }
})

const Customer = models.Customer || model("Customer", customerSchema);

export default Customer;