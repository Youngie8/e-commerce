import { Link } from 'react-router-dom';

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