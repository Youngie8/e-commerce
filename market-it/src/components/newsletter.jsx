
const Newsletter = ({ words }) => {
  return (
    <div className='newsletter'>
        <div className="container">
            <h2 className="newsletter-header">
              <span className="span-color-2">Join </span>
              Our
              <span className="span-color-2"> NewsLetter!</span>
            </h2>
            <p className="newsletter-substack">{ words }</p>
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