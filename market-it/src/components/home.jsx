import image1 from './images/image-1.png';
import Review from './review';
import Newsletter from './newsletter';
import { Link } from 'react-router-dom';
import { useState } from 'react'

const Home = () => {
    const [laptops, setLaptops] = useState([
        {
            "name": "MacBook Pro 2015",
            "image":"https://unsplash.com/photos/Hin-rzhOdWs",
            "price": 1099.99,
            "spec": {
                "RAM": "8GB",
                "Model": "MacBook A1418 (2015)",
                "OS": "Catalina 10.15.13",
                "Storage": "1TB SSD",
                "Screen Size": "15-inch",
                "WiFi": "Yes",
                "Touchscreen": true
            },
            "id": 1
        },
        {
            "name": "HP Folio 1040 G3",
            "image":"https://unsplash.com/photos/DkaEkeK81KU",
            "price": 659.99,
            "spec": {
                "RAM": "8GB",
                "Model": "Elitebook Folio 1040",
                "OS": "Windows OS",
                "Storage": "256GB SSD",
                "Screen Size": "14-inch",
                "WiFi": "Yes",
                "Touchscreen": true
            },
            "id": 2
        },
        {
            "name": "DeLL Inspiron 2021",
            "image":"https://unsplash.com/photos/uWFFw7leQNI",
            "price": 354.99,
            "spec": {
                "RAM": "8GB",
                "Model": "Inspiron 3055",
                "OS": "Windows OS",
                "Storage": "500GB SSD",
                "Screen Size": "15.6-inch",
                "WiFi": "Yes",
                "Touchscreen": false
            },
            "id": 3
        },
        {
            "name": "HP ProBook 650 G1",
            "image":"",
            "price": 509.99,
            "spec": {
                "RAM": "16GB",
                "Model": "ProBook 650",
                "OS": "Windows OS",
                "Storage": "1TB SSD",
                "Screen Size": "14-inch",
                "WiFi": "Yes",
                "Touchscreen": true
            },
            "id": 4
        },
        {
            "name": "Lenovo XXX 2011",
            "image":"",
            "price": 199.99,
            "spec": {
                "RAM": "4GB",
                "Model": "Lenovo A1418 (2011)",
                "OS": "Windows OS",
                "Storage": "64GB SSD",
                "Screen Size": "13-inch",
                "WiFi": "No",
                "Touchscreen": false
            },
            "id": 5
        }
    ])
    const [phones, setPhones] = useState([
         {
            "name": "iPhone 12 pro",
            "image":"",
            "price": 300.00,
            "spec": {
                "Model": "iPhone pro series",
                "RAM": "8GB",
                "Resolution": {
                    "Front": "15MP",
                    "Back": "48MP"
                },
                "Storage":"64GB",
                "Network": "LTE, 4G, 3G, 2G",
                "id": 1
            }
        },
        {
            "name": "Samsung S23",
            "image":"",
            "price": 305.00,
            "spec": {
                "Model": "Samsung S series",
                "RAM": "16GB",
                "Resolution": {
                    "Front": "15MP",
                    "Back": "48MP"
                },
                "Storage":"128GB",
                "Network": "LTE, 4G, 3G, 2G",
                "id": 2
            }
        },
        {
            "name": "Huawei M13  pro",
            "image":"",
            "price": 210.00,
            "spec": {
                "Model": "Huawei M series",
                "RAM": "6GB",
                "Resolution": {
                    "Front": "13MP",
                    "Back": "48MP"
                },
                "Storage":"128GB",
                "Network": "4G, 3G, 2G",
                "id":3
            }
        },
        {
            "name": "Samsung A23",
            "image":"",
            "price": 300.00,
            "spec": {
                "Model": "Samsung A series",
                "RAM": "12GB",
                "Resolution": {
                    "Front": "45MP",
                    "Back": "68MP"
                },
                "Storage":"256GB",
                "Network": "4G, 3G, 2G",
                "id":4
            }
        }
    ])
    const [users, setUsers] = useState([
        {
            "name": "Andrew tate",
            "image": "",
            "id": 1,
            "comment": "The company values diligence. fast and secure"
        },
        {
            "name": "Segun Orilu",
            "image": "",
            "id": 2,
            "comment": "The company values diligence. fast and secure, with accomplished mindsets"
        },
        {
            "name": "Mo Ahmed",
            "image": "",
            "id": 3,
            "comment": "product delivered with 1 year warranty."
        },
        {
            "name": "Ola Wade",
            "image": "",
            "id": 4,
            "comment": "The company is a diligent company. Very secured"
        }
    ])
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
                {laptops.map((laptop) => (
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
        <Review users={users} />
        <Newsletter />
    </div>
  )
}

export default Home