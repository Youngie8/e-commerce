import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {

      e.preventDefault()
        navigate('/');
      
    }
    return (
        <div className="login">
        <h4> Not a newbie to Market-IT? <Link to="/Login">Login</Link> </h4>
          <form onSubmit={handleSubmit}>
            <label>Name : </label>
            <input 
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)} />
            <label>E-mail : </label>
            <input 
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
            <button className='login-button'> Login </button>
          </form>
      </div>
    )
}

export default Signup