import React, { useState } from 'react';
import './App.css';

function CartList(props) {
    const { products } = props;

    let [cart, setCart] = useState([]);
    let [page, setPage] = useState('Cart');

    const navigateTo = (cartPage) => {
        setPage(cartPage);
    }

    if (page != 'productPage') return (
        <div>
            <h1>My Cart</h1>
            {products.map(({ brand_name, product_name, quantity, image_url, price, MRP, offer_text, index }) =>
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
                        <button >Remove from Cart</button>
                    </div>
                </div>
            )
            }
            <footer className="footerBox">
                {/* <button onClick={() => navigateTo(cartPage)}> Go to Cart ( {cart.length} )</button> */}
            </footer>
        </div>

    );
}

export default CartList;
