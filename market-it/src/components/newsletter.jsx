import React from 'react'
let substack = ""; 
const about = "Get the latest deals first! See Our Exclusive Gadgets First!"
const home = "Enjoy the best deals when you subscribe to our newsletter. Enjoy 5% discount on first purchase after subscription!"
const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className="container">
            <h2 className="newsletter-header">
              <span className="span-color-2">Join </span>
              Our
              <span className="span-color-2"> NewsLetter!</span>
            </h2>
            <p className="newsletter-substack">{ home }</p>
            <form action="">
              <input 
              type="text"
              placeholder='myemail@mail.com'/>
              <button>Suscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Newsletter