import {useState} from 'react';
import {CartContext} from './CardContext';
import { useContext } from "react";
function Products({ filtertext,data}){
    const carts = useContext(CartContext);
    return(
      <div className ="container">
        <div className ="row g-3" id = "element">{data.filter((val)  => {
          if(filtertext == " " ){
            return val
          }
          else if(val.Tittle.toLowerCase().includes(filtertext.toLowerCase()) || val.cateogry.toLowerCase().includes(filtertext.toLowerCase())){
            console.log("it entered into myspace")
            return val
          }
    
        }).map(item =>
        <div className="col-xs-7 col-sm-6 col-md-4 col-lg-3" key = {item.id} >
            <div className="card"  >
            <img className="card-img-top" src= {item.image} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">{item.Tittle}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{item.cateogry}</h6>
            <p className="card-text">Tasty and Delicious Food.</p>
            <p className="card-text"> RS. {item.Price}</p>
            <button type="button" className ="btn btn-primary" onClick = {() => carts.addOneToCart(item.id)}>Add to cart</button>     
            </div>
            </div>
        </div>
        )} </div>
      </div>        
          );
}
export default Products;