import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './pages/Home';
import Blog_detail from './pages/Blog_detail';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import Product from './pages/Product';
import Services from './pages/Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Blog_detail' element={<Blog_detail />}></Route>
          <Route path='/Blog' element={<Blog />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
          <Route path='/Checkout' element={<Checkout />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Detail' element={<Detail />}></Route>
          <Route path='/Product' element={<Product />}></Route>
          <Route path='/Services' element={<Services />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
