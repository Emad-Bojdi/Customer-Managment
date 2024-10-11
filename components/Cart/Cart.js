import React from 'react'
import FormInput from '../module/FormInput'

const Cart = ({ product, changeHandler, deleteHandler }) => {

    // const changeHandler = (e, index) => {
    //     const value = e.target.value;
    //     const name = e.target.name;

    //     console.log({ name, value });
    //     const newProducts = [...products];
    //     newProducts[index][name] = value;
    //     setForm({ ...form, products: newProducts });
    // }
    return (
        <div className='form-input__list'>
            <FormInput name="name" label="Product Name" type="text" value={product.name} onChange={changeHandler} />
            <div className="">
                <FormInput name="price" label="Price" type="text" value={product.price} onChange={changeHandler} />
                <FormInput name="qty" label="Qty" type="number" value={product.qty} onChange={changeHandler} />
            </div>
            <button onClick={deleteHandler}>
                Remove
            </button>
        </div>
    )
}

export default Cart;
