import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Logo } from "../../assets/AssetExport";
import { useStateValue } from "../../Provider/StateProvider";

function Header() {
    const [{ basket }] = useStateValue();
    return (
        <nav className="header">
            <Link to='/'>
                <img className="header__logo" src={Logo} alt="logo" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">

                {/* this is one of the links on the navigation bar */}
                <Link className="header__link" to="/login">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Musah</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                {/* this is one of the links on the navigation bar */}
                <Link className="header__link" to="/">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* this is one of the links on the navigation bar */}
                <Link className="header__link" to="/">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* this is the shopping basket icon */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header;