import image1 from './images/image-1.png'
import useFetch from './usefetch';
import { Link } from 'react-router-dom'

const Home = () => {
    const { data: laptops} = useFetch('http://localhost:8000/laptops/');
  return (
    <div className='home'>
        <div className="container">
            <div className="flex main">
                <div className="col">
                    <h2 className="main-header">Market-IT<span className="white">!</span></h2>
                    <p className="main-subsection">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias accusantium impedit quae numquam doloremque quas?</p>
                    <button className="main-button">Shop Now</button>
                </div>
                <div className="main-img">
                    <img src={image1} alt="laptop" height={400} width={600} />
                </div>
            </div>
            <div className="featured">
                <h2> Trending Products</h2>
                <div className="flex">
                    {laptops && laptops.map((laptop) => (
                    <div className="col" key={laptop.id}>
                        {laptop.id < 3 && <Link to={`/products`}>
                                <img src={laptop.image} alt="" height={200} width={320} />
                                <h2>{laptop.name}</h2>
                                <p>$ {laptop.price}</p>
                        </Link>}
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home