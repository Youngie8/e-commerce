import Home from './components/home';
import About from './components/about';
import Navbar from './components/navbar';
import Products from './components/products';
import Cart from './components/cart';
import Notfound from './components/notfound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import hp_elitebook1 from './components/images/hp_elitebook1.jpg';
import hp_elitebook2 from './components/images/hp_elitebook2.jpg';
import hp_elitebook3 from './components/images/hp_elitebook3.jpg';
import lenovo_thinkpad1 from './components/images/lenovo_thinkpad1.jpg';
import lenovo_thinkpad2 from './components/images/lenovo_thinkpad2.jpg';
import lenovo_thinkpad3 from './components/images/lenovo_thinkpad3.jpg';
import Login from './components/login';
import Signup from './components/signup';
import Phone from './components/phone';
import Laptop from './components/laptop';
function App() {
  const [cart, setCart] = useState({});
  const [laptops, setLaptops] = useState([
    {
        "name": "MacBook Pro 2015",
        "image":hp_elitebook2,
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
        "image": hp_elitebook3,
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
        "image":lenovo_thinkpad2,
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
        "image": lenovo_thinkpad1,
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
        "image":lenovo_thinkpad3,
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
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home users={users} laptops={laptops} />} />
          <Route path='/about' element={<About users={users}/>} />
          <Route path='/products' element={<Products laptops={laptops} phones={phones} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/products/phones/:id' element={<Phone />} />
          <Route path='/products/laptops/:id' element={<Laptop />} />
          <Route path='/*' element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
