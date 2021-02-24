import React from 'react'
import './Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

const Navbar = () => {
    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="Navbar">
            <Link to='/'>
                <img className="NavbarLogo" src="./logo.png" alt='' />
            </Link>

            <div className="NavbarSearch">
                <input type="text" className="NavbarSearchBar" />
                <SearchIcon className="NavbarSearchIcon" />
            </div>

            <div className="NavbarSub">
                <Link to={!user && '/signin'} style={{ textDecoration: 'none' }}>
                    <div onClick={handleAuth} className="NavbarOptions">
                        <span className="OptionLineOne">Hello Guest</span>
                        <span className="OptionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <div className="NavbarOptions">
                    <span className="OptionLineOne">Requests</span>
                    <span className="OptionLineTwo"> & Orders </span>
                </div>

                <Link to='/checkout'>
                    <div className="NavbarCart">
                        <ShoppingCartIcon />
                        <span className="OptionLineTwo NavbarCartCount">{cart.length}</span>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Navbar
