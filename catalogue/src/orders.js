import {useState,useEffect} from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Table } from 'react-bootstrap'; 
function Orders(){
    const[orders,setOrders] = useState([])
    function handledata(){
        console.log("HI I entered here")
        fetch("https://5wf20jgus1.execute-api.ap-south-1.amazonaws.com/v1/foods")
        .then((response) => response.json())
        .then((value) =>setOrders(value));
      
      }
    useEffect(()=>{
        handledata()
    },[])
    return(
      <>
      <div className ="container mt-3">
      <Table striped bordered hover responsive="md">  
  <thead>  
    <tr>  
      <th>Cateogry</th>  
      <th>Tittle</th>  
      <th>Quantity</th>  
      <th>Price</th>  
    </tr>  
  </thead>  
  <tbody> 
 {   orders.map((item,index)=>{
            return(
                  <tr className='table-active' key={index}>
                    <td>{item.cateogry}</td>
                    <td>{item.Tittle}</td>
                    <td>{item.quantity}</td>
                    <td>{item.Price }</td>
                  </tr>
            )
          })
 } 
    
  </tbody>  
</Table> 
      </div>
      </>
    );
}
export default Orders;