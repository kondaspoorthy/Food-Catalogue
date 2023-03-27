import {useState,useEffect} from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Products from './products';
import  {items} from './Items';
import  CartProvider from './CardContext';
import Cart from './cart';
import Orders from './orders';

function App() {
  const [filtertext,setfiltertext] = useState("");
  const [data,setData] = useState([]);
  // const [cart,setCart] = useState([]);
  // function addtocart(id){
  //   let products = data.find((product)=>product.id === id);
  //   setCart([...cart,products])

  // }
  function getData(){
//     fetch('./products.json')
//     .then((response) => response.json())
//     .then((findresponse)=> {
//     setData(findresponse) 
// })
    setData(items)
    return;
 }
 useEffect(()=>{
  getData();
  console.log("Counting the number occurence of this")
 }, [])

  return (
    <>
    <Router>
     <CartProvider>
     <Navbar filtertext = {filtertext} setfiltertext ={setfiltertext}/>
     <Routes>
     <Route path ="/" element = {<Products filtertext= {filtertext} data ={data} />}></Route>
     <Route path ="/cart" element = {<Cart/>}></Route>
     <Route path ="/orders" element = {<Orders/>}></Route>
     </Routes>

    </CartProvider>
    </Router>
    </>
  );
}

export default App;
