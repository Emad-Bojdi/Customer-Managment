import React from 'react'
import FormInput from '../module/FormInput'

const Cart = ({ value, onChange, form , setForm , index }) => {
    const {products} = form

    const changeHandler = (e , index) => {};
    
    const deleteHandler = () => {};
    return (
        <div className='form-input__list'>
            <FormInput name="name" label="Product Name" type="text" value={value} onChange={changeHandler}  />
            <div className="">
                <FormInput name="price" label="Price" type="text" value={value}  onChange={changeHandler}/>
                <FormInput name="qty" label="Qty" type="number" value={value} onChange={changeHandler}/>
            </div>
            <button onClick={deleteHandler}>
                Remove
            </button>
        </div>
    )
}

export default Cart
