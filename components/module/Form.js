import FormInput from "./FormInput";
import ItemList from "./ItemList"


const Form = ({ form, setForm }) => {
  return (
    <div>
      <FormInput name={"name"} label={"Name"} type={"text"} value={form.name} onChange={changeHandler}/>
      <FormInput name={"lastName"} label={"Last Name"} type={"text"} value={form.name} onChange={changeHandler}/>
      <ItemList form={form} setForm={setForm} />
    </div>
  )
}

export default Form;
