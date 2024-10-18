import { useRouter } from "next/router";
import Form from "../module/Form";
import moment from "moment/moment";
import { useState } from "react";


const CustomerEditPage = ({data , id}) => {

    const router = useRouter();

    const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") :  "";

    const [form , setForm] = useState({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone || "",
        address: data.address || "",
        postalCode: data.postalCode || "",
        products: data.products || "",
        date: date,
    });
    const editHandler = async () => {
      console.log(id)
        const res = await fetch(`/api/edit/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ data : form}),
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await res.json();
        if(data.status === "success"){
            router.push("/")
        }
    }


    const cancelHandler = () => {
        router.push("/");
    }
  return (
    <div className="customer-page">
      <h4> Edit Customer</h4>
      <Form form={form} setForm={setForm}/>
      <div className="customer-page__buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={editHandler}>
          Edit
        </button>
      </div>
    </div>
  )
}

export default CustomerEditPage
