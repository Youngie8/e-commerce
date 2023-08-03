import Home from './components/home'
import About from './components/about'
import Navbar from './components/navbar'
import Products from './components/products'
import Cart from './components/cart'
import Notfound from './components/notfound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
