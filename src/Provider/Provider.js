import React, {createContext, useContext, useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import {list} from '../components/Watches';


const ContextProvider = createContext();

export const useCart = () => useContext(ContextProvider);

export const CartWrapper = ({children}) => {
    const [cart, setCart] = useState([]);
    const [watchList, setWatchList] = useState(list);
    //const [tempstate,setTempState] = useState([]);

    const Location = useLocation();

    useEffect(()=> {
        //window.localStorage.removeItem('cart')
        if (cart.length){
            window.localStorage.setItem('cart', JSON.stringify(cart));
            //const cartItem = window.localStorage.getItem('cart');
        }
    }, [cart]);

    


    useEffect(()=>{
        const cartItem = window.localStorage.getItem('cart');
            if (cartItem){
                setCart(JSON.parse(cartItem));
            }
    }, [Location]);

    const values = {
    cart,
    setCart,
    watchList,
    setWatchList,
}

return(
    <ContextProvider.Provider value={values}>
        {children}
    </ContextProvider.Provider>
)

}