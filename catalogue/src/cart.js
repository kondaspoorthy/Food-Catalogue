import {useState} from 'react'
import { useContext } from 'react';
import {CartContext} from './CardContext';
import CartProduct from './cartproduct';
import Button from 'react-bootstrap/Button';
import  {items} from './Items'; 
function Cart(){
    const carts = useContext(CartContext);
    const cart = useContext(CartContext).items;
    function handledata(jsonData) {
        console.log(JSON.stringify(jsonData)) 
        // Send data to the backend via POST
        fetch('https://tzqbmwnut3.execute-api.ap-south-1.amazonaws.com/v1/food', {  // Enter your IP address here 
          method: 'POST', 
          mode: 'no-cors', 
          headers: {
              "Access-Control-Allow-Headers" : "Content-Type",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
              'content-Type': 'application/json',
          },
          body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
      
        }).then(()=>{
          console.log("new blog addewd")
        })
        
      }
    function getitem(item){
        return items.find(product => product.id === item.id)
    }
    function handleclick(){
        cart.map((item) =>{
            const value = getitem(item);
            handledata({
                "id": String(item.id),
                "category": String(value.cateogry),
                "Tittle" : String(value.Tittle),
                "Price" : String(item.quantity * value.Price),
                "quantity": String(item.quantity)
            })
            
        })
        carts.Clearcart()

    }
    return(
        <div className ="container">
            <div className = "row">
            {
                cart.map((item) => (
                        
                       <CartProduct id = {item.id} quantity = {item.quantity}  key ={item.id}/>
                    ))
            }

             </div>
             <Button size="sm" onClick = {() => handleclick()} ><strong>Checkout</strong></Button>
             <Button size="sm" style = {{"float":"right"}} onClick = {() => carts.Clearcart()} ><strong>Clearcart</strong></Button>
           
    </div>

    );

}
export default Cart;

