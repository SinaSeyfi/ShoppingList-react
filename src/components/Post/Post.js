import React from 'react';
import { useCart } from 'react-use-cart';
import "./Post.scss";



export default function Post(props) {

    //add item to cart
    const { addItem } = useCart();

    return (
        <div className='col-4'>
            <div className='post'>
                <div className='postImg'>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className='postContent'>
                    <h3>{props.title}</h3>
                    <p>category: {props.category}</p>
                    <span>${props.price}</span>
                </div>
                <div className='buy'>
                    <button onClick={() => addItem(props.item)} className='btn btn-success'>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
