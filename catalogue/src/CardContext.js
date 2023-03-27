import { createContext, useState, useEffect} from "react";
import  {items} from './Items'; 
export const CartContext = createContext({
    items:[],
    getProductQuantity: () => {},
    addOneToCart : () =>{},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
    Clearcart: () => {}
})

export function CartProvider({children}){
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem('cartproducts'))|| []);
    useEffect(() => {
        localStorage.setItem('cartproducts',JSON.stringify(cartProducts));
      },[cartProducts]);
     
    // [{id:1,quantity:3}]
    function getProductQuantity(id){
        const item = cartProducts.find(product => product.id == id)
        if (item === undefined){
            return 0;
        }
        return item.quantity;
    }
    function Clearcart(){
        setCartProducts([])
    }
    function addOneToCart(id){
        const quantity = getProductQuantity(id);
        if(quantity === 0){
            setCartProducts([
                ...cartProducts, {id:id,quantity:1}
            ])
        }
        else {
            setCartProducts( cartProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity + 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }
    function deleteFromCart(id) {
        // [] if an object meets a condition, add the object to array
        // [product1, product2, product3]
        // [product1, product3]
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id !== id;
            })  
        )
    }
    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity - 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }
    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = items.find( (item) =>  item.id === cartItem.id)
            totalCost += (productData.Price * cartItem.quantity);
        });
        return totalCost;
    }
    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
        Clearcart
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;