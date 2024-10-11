
import Cart from "../Cart/Cart"


const ItemList = ({ form, setForm }) => {

    const { products } = form;
    const addHandler = () => {
        setForm({
            ...form,
            products: [...products, { name: '', price: ' ', qty: '' }],
        })
        console.log(form)
    }
    const changeHandler = (e, index) => {
        const value = e.target.value;
        const name = e.target.name;

        console.log({ name, value });
        const newProducts = [...products];
        newProducts[index][name] = value;
        setForm({ ...form, products: newProducts });
    }
    const deleteHandler = (index) => {
        const newProducts = [...products];
        newProducts.splice(index, 1);
        setForm({ ...form, products: newProducts })

    };
    return (
        <div className="item-list">
            <p>
                purchased products
            </p>
            {
                products.map((product, index) => (
                    <Cart product={product} key={index} changeHandler={e => changeHandler(e, index)} deleteHandler={() => deleteHandler(index)} />
                    
                ))
            }
            <button onClick={addHandler}>
                Add Item
            </button>
        </div>
    )
}

export default ItemList
