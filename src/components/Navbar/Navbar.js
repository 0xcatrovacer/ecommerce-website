import React from 'react'
import './Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Navbar = () => {
    return (
        <div className="Navbar">
            
            {/* Logo */}
            <img className="NavbarLogo" src='./truckerlogo.png' />
            
            {/* SearchBar */}
            <div className="NavbarSearch">
            <input type="text" className="NavbarSearchBar"/>
            <SearchIcon className="NavbarSearchIcon" />
            </div>
            
            {/* Sub Buttons */}
            <div className="NavbarSub">
                <div className="NavbarOptions">
                    <span className="OptionLineOne">Hello Guest</span>
                    <span className="OptionLineTwo">Sign In</span>
                </div>
                    
                <div className="NavbarOptions">
                    <span className="OptionLineOne">Requests</span>
                    <span className="OptionLineTwo"> & Orders </span>    
                </div>

                <div className="NavbarCart">
                    <ShoppingCartIcon />
                    <span className="OptionLineTwo NavbarCartCount">0</span>
                </div>

            </div>

        </div>
    )
}

export default Navbar
