import logo from './logo.svg';
import './App.css';
import NavBar from './navbar'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Product from './product';
import Cart from './cart';
function App() {
  return (
  <Router>
    <Routes>
    <Route exact path="/" element={<NavBar/>}/>
    <Route  path="/products" element={<Product/>}/>
    <Route  path="/cart" element={<Cart/>}/>

</Routes>


  </Router>
  );
}

export default App;
