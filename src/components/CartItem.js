import {useCart} from "../Provider/Provider.js"
import "../styles/cartitem.css"

export const CartItem = () => {
    const {cart} = useCart();
   // const total = (cart.reduce((total, currentCart) => total = total + (currentCart.price*currentCart.qty)));

    
    let total = 0;
    let subTotal = 0;
    return (
        <div>
            <div><h1>Here are the items bought:</h1></div>
        
            {cart.map((watch,index)=> (
                
                <div className="cart">
                    <div key = {index}>
                        <img width="100px" src={watch.img} alt="watch"/>
                        <strong>{watch.title}</strong>
                        <div>Quantity: {watch.qty} </div>
                        <div>Price: ${watch.price}</div>
                        <div className="showSubTotal"> Total: $ {subTotal=watch.price * watch.qty}</div>
                       
                        <div className="hideTotal">{total=total + subTotal}</div>
                    </div>
                </div>  
            ))}  
                  <div className="showTotal"><h2>GRAND TOTAL: ${total}</h2></div>
                  
        
        
        </div>
    )
}