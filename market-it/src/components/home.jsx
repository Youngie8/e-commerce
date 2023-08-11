import image1 from './images/image-1.png';
import useFetch from './usefetch';
import { Link } from 'react-router-dom';
import Review from './review';
import Newsletter from './newsletter';

const Home = () => {
    const { data: laptops, error} = useFetch('http://localhost:8000/laptops/');
  return (
    <div className='home'>
        <div className="container">
            <div className="flex main">
                <div className="col">
                    <h2 className="main-header">Tech<span className="span-color-2"> Treasures</span> For Every Need </h2>
                    <p className="main-subsection">Market-IT: Your Hub for Cutting-edge Computers and Electronics - Unleash the Future Today!</p>
                    <Link to="/products">
                        <button className="main-button">Shop Now</button>
                    </Link>
                </div>
                <div className="main-img">
                    <img src={image1} alt="laptop" height={400} width={600} />
                </div>
            </div>
        </div>
        <div className="trending">
            <h2 className="trending-header"> Trend<span className="span-line">ing Pro</span>ducts</h2>
            <div className="flex">
                {error && <div> { error }</div>}
                {laptops && laptops.map((laptop) => (
                <div className="col" key={laptop.id}>
                    {laptop.id <= 3 && <Link to={`/products`}>
                            <img src={laptop.image} alt="" height={200} width={320} />
                            <div className="flex-trending">
                            <h4 className="trending-name">{laptop.name}</h4>
                            <p className="trending-price">${laptop.price}</p>
                            </div>
                    </Link>}
                </div>
                ))}
            </div>
            <Link to="/products">
                <button className="trending-button">View All Products</button>
            </Link>
        </div>
        <div className="container">
            <Review />
        </div>
        <Newsletter />
    </div>
  )
}

export default Home