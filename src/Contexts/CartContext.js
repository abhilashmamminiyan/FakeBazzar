import { createContext, useEffect, useState} from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCart]=useState([]);
    
    const addToCart = (product) => {
        setCart((prevCart)=> {
          const existing = prevCart.find((item)=> item.id === product.id);
          if(existing){
            return prevCart.map((item) => item.id === product.id 
            ? { ...item, qty: item.qty + 1 }
          : item );
          } else {
            return [...prevCart,{...product, qty: 1 }];
          }
        });
        
    };
    
    const removeFromCart = (id)=> {
      setCart((prevCart)=>{
        const existingItem = prevCart.find((item)=> item.id === id);
        
        if(existingItem.qty === 1){
          return prevCart.filter((item)=> item.id !== id);
        } else {
          return prevCart.map((item)=> item.id === id ? {...item, qty: item.qty - 1} : item );
        }
      })
    }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };
export default CartContext;

    
