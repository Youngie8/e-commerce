import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='notfound'>
      <h1>ERROR</h1>
      <h1 className="err404">404</h1>
      <p>You don dey go where you no know oo! </p>
      <Link to="/"><button>Go Home</button></Link>
    </div>
  )
}

export default Notfound