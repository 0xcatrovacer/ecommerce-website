import React, { useState } from 'react'
import './Signin.css'
import { Link } from "react-router-dom"

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault();
    }

    const register = (e) => {
        e, preventDefault();
    }

    return (
        <div className="Signin">
            <Link to='/'>
                <img className='SigninLogo' src="./logo.png" alt="" />
            </Link>

            <div className="SigninContainer">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' className='SigninButton' onClick={signIn} >Sign In</button>
                </form>

                <p>By signing-in, you agree to the BOOKK Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

                <button className='RegisterButton' onClick={register} >Create your Bookk Account</button>
            </div>
        </div>
    )
}

export default Signin
