import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();
      then(() => {
        navigate('/')
      })
    }
  return (
    <div className="login">
        <form onSubmit={handleSubmit}>
          <label>E-mail: </label>
          <input 
          type="text" />
        </form>
    </div>
  )
}

export default Login