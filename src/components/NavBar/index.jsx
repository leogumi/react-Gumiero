import React from "react";
import "./styles.scss";
import CartWidget from "../CartWidgets";
import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <ul className="nav-list">
            <li className="nav-item">
                <Link to="/">Inicio</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/electronics">Electronica</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/jewelery">Joyeria</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/men's clothing">Ropa Masculina</Link>
            </li>
            <li className="nav-item">
                <Link to="/category/women's clothing">Ropa Femenina</Link>
            </li>
            <div className="widget-container">
                <CartWidget />
            </div>
        </ul>
    );
}