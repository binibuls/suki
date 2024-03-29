import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/"> Hot Now</Link>
                </li>
                <li>
                    <Link to="/">Logo</Link>
                </li>
                <li>
                    <Link to="/pizzas"> Pizza</Link>
                </li>
                <li>
                    <Link to="/beers"> Beers</Link>
                </li>
                <li>
                    <Link to="/slicemasters">Slicemasters</Link>
                </li>
                <li>
                    <Link to="/orders">Order Ahead!</Link>
                </li>
            </ul>
        </nav>
    )
}