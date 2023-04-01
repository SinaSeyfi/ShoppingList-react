import React from 'react';
import { useCart } from 'react-use-cart';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';
import "./ShoppingList.scss";
import emptyImage from "../../assets/images/1.png";

export default function ShoppingList() {

    //handle cart
    const {
        isEmpty,
        cartTotal,
        items,
    } = useCart();
    if (isEmpty) return (
        <div className='col-3'>
            <div className='ShoppingLists'>
                <img src={emptyImage} />
            </div>
        </div>
    );

    return (
        <div className='col-3'>
            <div className='ShoppingList'>
                <div className='shoppingListItems'>
                    {items.map((item) => (
                        <ShoppingListItem
                            key={item.id}
                            item={item}
                        />
                    ))}

                </div>
                <div className='cart'>
                    <span>${cartTotal}</span>
                    <span>:total</span>
                </div>
            </div>
        </div>
    )
}
