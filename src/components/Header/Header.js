import React from 'react';
import { useCart } from 'react-use-cart';
import './Header.scss';

export default function Header() {

    //to show total item
    const {
        totalUniqueItems,
    } = useCart();

    return (
        <div className='container fixed-top'>
            <div className='row header alignItems'>
                <div className='col-3'>
                    <div className='ShopCart'>
                        <i className=" fa-duotone fa-cart-shopping"></i>
                        <span>{totalUniqueItems}</span>
                    </div>
                </div>
                <nav className='col-6'>
                    <ul className='navbar'>
                        <li>
                            <a href='#'>Github</a>
                        </li>
                        <li>
                            <a href='#'>Linkedin</a>
                        </li>
                        <li>
                            <a href='#'>Youtube</a>
                        </li>
                        <li>
                            <a href='#'>Visitsite</a>
                        </li>
                    </ul>
                </nav>
                <div className='col-3'>
                    <div className='logo'>
                        ShoppingList
                    </div>
                </div>
            </div>
        </div>
    )
}
