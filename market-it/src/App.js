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
          <Route path='/products/:id' element={<Phone />} />
          <Route path='/products/:id' element={<Laptop />} />
          <Route path='/*' element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
