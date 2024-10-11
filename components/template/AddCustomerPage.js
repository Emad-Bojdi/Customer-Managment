import { useState } from "react"
import Form from "../module/Form"
import { useRouter } from "next/router"


const AddCustomerPage = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: []
  })

  const cancelHandler = () => {
    setForm({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      date: "",
      products: []
    });
    router.push("/")
  }

  const saveHandler = async () => {
    const res = await fetch("api/customer", {
      method: "POST",
      body : JSON.stringify({ data: form}),
      headers: {"Content-Type" : "application/json"}
    });
    const data = res.json();
    console.log(data);
    if (res.status === "success") router.push("/");
  }
  return (
    <div className="customer-page">
      <h4 className=""> Add New Customer</h4>
      <Form form={form} setForm={setForm} />
      <div className="customer-page_buttons">
        <button className="first" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="second" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  )
}

export default AddCustomerPage
