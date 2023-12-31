import {useEffect, useState, useContext} from "react";
import {useNavigate} from "react-router-dom";

import {TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import {Context} from "../../utils/context";

import "./Header.scss";

const Header = () => {
    
    return <header className="main-header"> 
<div className="header-content">
    <ul className="left">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CATEGORIES</li>
    </ul>
    <div className="center">PRELOVED KICKS.</div>
    <div className="right">
        <TbSearch/>
        <AiOutlineHeart/>
        <span className="cart-icon"><CgShoppingCart/>
        <span>5</span>
        </span>
    </div>
</div>
    </header>;
};

export default Header;
