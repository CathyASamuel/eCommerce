import {CartItem} from "./components/CartItem"  
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import {Home} from "./components/Home";
import {CartWrapper} from './Provider/Provider'


function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
          <CartWrapper>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path= "/cart" element={<CartItem />}/>
              </Routes>
          </CartWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
