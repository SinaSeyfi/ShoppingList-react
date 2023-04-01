import React from 'react';
import { useCart } from 'react-use-cart';
import './ShoppingListItem.scss'

export default function ShoppingListItem(props) {

    //handle item add or remove
    const {
        updateItemQuantity,
        removeItem,
    } = useCart();

    return (
        <div className='ShoppingListItem'>
            <div className='ShoppingListItemContent'>
                <h3>{props.item.title}</h3>
                <div className='priceNum'>
                    <div className='price'>
                        <span>${props.item.price}</span>
                    </div>
                    <div className='num'>
                        <i className=" fa-duotone fa-plus" onClick={() => updateItemQuantity(props.item.id, props.item.quantity + 1)}></i>
                        <span>{props.item.quantity}</span>
                        <i className=" fa-duotone fa-minus" onClick={() => updateItemQuantity(props.item.id, props.item.quantity - 1)}></i>
                    </div>
                    <div className='trash'>
                        <i className=" fa-duotone fa-trash" onClick={() => removeItem(props.item.id)}></i>
                    </div>
                </div>
            </div>
            <div className='ShoppingListItemImg'>
                <img src={props.item.image}/>
            </div>
        </div>
    )
}
