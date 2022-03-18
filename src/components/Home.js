import React from 'react';
import {ProductList} from "./ProductList";
import pic from "../images/home.jpg";

export const Home = () => {
    return (
    <div>
        <img src={pic} alt="Home"/>;
        <div><h1>Shop Now!</h1></div>;
        <div><ProductList/></div>;
    </div>
)
}