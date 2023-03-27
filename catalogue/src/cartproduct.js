import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import {CartContext} from "./CardContext";
import { useContext } from "react";
import  {items} from './Items'; 
function CartProduct({id, quantity}) {
    const cart = useContext(CartContext);
    const [sample,setSample] = useState([])
    let productData = items.find(product => product.id === id);

    return (
        <>
        <div className = "card mt-3 mb-3">
            <div className = "card-body">
                <div className ="row ">
                    <div className ="col-md-3">
                        <img className="card-img-top" src= {productData.image} style = {{"height":100, "width":100}} alt="Card image cap"/>
                    </div>
                    <div className ="col-md-2">
                        <h5 class="card-title">{productData.Tittle}</h5>
                    </div>
                    <div className ="col-md-1">
                        <h5 class="card-text">{quantity}</h5>
                    </div>
                    <div className ="col-md-1">
                    <p>${ (quantity * productData.Price).toFixed(2) }</p>
                    </div>
                    <div className ="col-md-1">
                        <Button size="sm" onClick={() => cart.addOneToCart(id)}><strong> + </strong></Button>
                    </div>
                    <div className ="col-md-1">
                        <Button size="sm" onClick={() => cart.removeOneFromCart(id)}><strong> - </strong></Button>
                    </div>
                    <div className ="col-md-1">
                        <Button size="sm" onClick={() => cart.deleteFromCart(id)}><strong>Remove</strong></Button>
                    </div>
                </div>
    </div>
    </div>
    </>
         
    );
}

export default CartProduct;