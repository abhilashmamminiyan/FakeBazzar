import './App.css';
import Header from './components/Header/Header';
import { Routes , Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductList from './components/ProductsList/ProductsList';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import ProductDeatils from './components/ProductDetails/ProductDetails';
import LogIn from './components/LogIn/LogIn';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterContext from './Contexts/FilterContext';
import { useEffect , useState } from 'react';
import Cart from './components/Cart/Cart';

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/NotFound";
  const [productList, setProductList] = useState([]);

  function loadProductsAPI(){
    fetch('https://fakestoreapi.com/products').then((response) => {
      response.json().then((data)=>{
        setProductList(data);
      })
    })
  }

  useEffect(()=>{ loadProductsAPI();},[ ]);

  

  return (
  <>
  <FilterContext.Provider value={{
    productList : productList,
  }} >
    
      {!hideLayout && <Header />}
      <div className='app' >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductList/>} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/logIn' element={<LogIn />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/products/:productId' element={<ProductDeatils />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        </div>
      {!hideLayout && <Footer /> }
    
  </FilterContext.Provider>
  
  </>
  );
}

export default App;
