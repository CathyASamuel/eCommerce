import { list } from "./Watches";
import "../styles/product.css";
import { Navbar } from "./Navbar";
import { useEffect } from "react";
import {useCart} from '../Provider/Provider' ;
import ShowMoreText from "react-show-more-text";

const updateQuantity = (event, typeevent) => {
//check the type of event and increase or decrease counter
const parent=event.target.parentElement
//find the span and undate value
const span=parent.getElementsByTagName("span")[0]
//get contents of span
let spanContent = span.innerHTML||0
spanContent=parseInt(spanContent)
if (typeevent==="-"){
    spanContent > 0 && spanContent--
} 
    else {
    spanContent++
    }
span.innerHTML=spanContent
}

export const ProductList = () => {



    //variable for quantity
const addToCart = (item, id)=>{
    const element = document.getElementById(id)
    let qty = element.innerText || 1
    qty = parseInt(qty)

    for(let content of cart){
        if (content?.id === item.id){
            return updateQty(item, qty);
        }
    }

    item["qty"] = qty
    setCart([...cart, item])
}
//function to update quantity
const updateQty = (item, qty)=>{
    const tempCart = JSON.parse(JSON.stringify(cart));
    let tempArray = [];
    for(let obj of tempCart){
        if (obj.id === item.id){
            obj['qty'] = obj.qty + qty;
        }
        tempArray.push(obj);
    }
    setCart(tempArray);
}


const {cart, setCart} = useCart();
//const [counter,  setCounter]=useState([])


//check for value changes and print
useEffect(()=>{
    console.log(cart)
}, [cart])


    
return(
    



    <div>
        <div> <Navbar counter={cart.length}/> </div>  
            <div className = "column"> {
            list.map((watch, index) => (
             <div key = { index } className = "column">
                <h1> { watch.title } </h1>  
                <img width="200px" src={watch.img} alt="Watch"/>
                <h3> <label> Price: $ </label>
                {watch.price}</h3>
                <label> Quantity: </label>
                <button onClick={(event)=>updateQuantity(event,"-")}> - </button>
     
                <span id={`quantity${index}`}>1</span>
                
                <button onClick={(event)=>updateQuantity(event,"+")}> + </button>  
                
                <button className = "btn" onClick={()=>addToCart(watch, `quantity${index}`)}> Add to Cart </button>  
                
                
                
                <br></br> 
                <ShowMoreText>
                    {watch.info}  
                    {watch.info2}
                </ShowMoreText>
                

                
                
                </div>
            ))
    } 
           </div>  
    </div>
)}