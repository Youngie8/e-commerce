import React from 'react';
import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={faEnvelope} />

// ReactDOM.render(element, document.body)


const Navbar = () => {
  return (
    <div className="navbar">
        <Link className="nav-header" to="/">Market-IT<span className="span-color-2">!</span> </Link>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
        </div>
    </div>
  )
}

export default Navbar