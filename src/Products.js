import React, { useState } from 'react';
import './App.css';

const PAGE_PRODUCTS = 'productPage';
const PAGE_CART = 'cartPage';

function ProductList(props) {
    const { products } = props;

    let [cart, setCart] = useState([]);
    let [page, setPage] = useState(PAGE_PRODUCTS);


    const addToCart = (index) => {
        console.log("addtocart", products[index]);
        setCart([...cart, products[index]]);
    };

    const removeFromCart = (product_name) => {
        setCart(
            cart.filter((product) => product.product_name !== product_name)
        );
    };

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };

    const renderProducts = () => (
        <>
            <h1>Product Page</h1>
            {products.map(({ brand_name, product_name, quantity, image_url, price, MRP, offer_text }, index) =>
                <div className="products" key={index}>
                    <div>
                        <img src={image_url} alt="" />
                    </div>
                    <div className="contentBox">
                        <h3>{brand_name}</h3>
                        <h4>{product_name}</h4>
                        <p>{quantity}</p>
                        <p>MRP: {MRP}</p>
                        <p>Rs: {price}</p>
                    </div>
                    <div className="discountText">
                        <p>{offer_text}% OFF</p>
                    </div>
                    <div className="buttonBox">
                        <button onClick={() => addToCart(index)}>Add to Cart</button>
                        <button>-</button>
                        <span>{cart.length}</span>
                        <button onClick={() => addToCart(index)}>+</button>
                    </div>
                </div>
            )
            }
            <footer className="footerBox">
                <button onClick={() => navigateTo(PAGE_CART)}> Go to Cart ( {cart.length} )</button>
            </footer>
        </>
    );

    const renderCart = () => (
        <>
            <h1>My Cart ({cart.length})</h1>
            {console.log(cart)}
            {cart.map(({ brand_name, product_name, quantity, image_url, price, MRP, offer_text }, index) =>
                <div className="products" key={index}>
                    <div>
                        <img src={image_url} alt="" />
                    </div>
                    <div className="contentBox">
                        <h3>{brand_name}</h3>
                        <h4>{product_name}</h4>
                        <p>{quantity}</p>
                        <p>MRP: {MRP}</p>
                        <p>Rs: {price}</p>
                    </div>

                    <div className="discountText">
                        <p>{offer_text}% OFF</p>
                    </div>
                    <div className="buttonBox">
                        <button onClick={() => removeFromCart(product_name)} >Remove from Cart</button>
                    </div>
                </div>

            )}
            <footer className="footerBox">
                <button onClick={() => navigateTo(PAGE_PRODUCTS)}> Go Back </button>
            </footer>
        </>
    );

    return (
        <div>
            {page === PAGE_PRODUCTS && renderProducts()}
            {page === PAGE_CART && renderCart()}

        </div>

    );
}

export default ProductList;
