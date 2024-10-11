
import Cart from "../Cart/Cart"


const ItemList = ({ form, setForm }) => {

    const {products} = form;
    const addHandler = () => {
        setForm({
            ...form,
            products: [...products, { name: '', price: ' ', qty: '' }],
            
        })
        console.log(form)
    }
    return (
        <div className="item-list">
            <p>
                purchased products
            </p>
            {
                products.map((product, index) => (
                    <Cart value={product.name} form={form} setForm={setForm} key={index} />
                ))
            }
            <button onClick={addHandler}>
                Add Item
            </button>
        </div>
    )
}

export default ItemList
