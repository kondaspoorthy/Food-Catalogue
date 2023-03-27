import {useState} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
function Navbar({filtertext,setfiltertext}){
    const [text,setText] = useState(" ")
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleForm = (e) => {
        setfiltertext(text);
        e.preventDefault();
    }   
    return(
      <nav className="navbar navbar-expand-lg bg-light mb-3">
      <div className="container-fluid">
        <h4 className="navbar-brand font-size:x-large " color='black' href="/">Food Hub</h4>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Link className ="nav-link" to ="/">Home</Link>
          <Link className ="nav-link" to ="/orders">Orders</Link>     
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value = {text} onChange = {handleChange} />
          <button className="btn btn-success" type="submit" onClick={handleForm}>Search</button>
        </form>
          <Link className ="nav-link" to ="/cart"><FontAwesomeIcon className='shopcart' style= {{"margin":"20px"}} icon={faShoppingCart}></FontAwesomeIcon></Link>
        </div>
      </div>
      </nav>
    );

}
export default Navbar;