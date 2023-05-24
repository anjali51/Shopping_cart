import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Todolist from './components/Todolist';
import Counter from './components/Counter';
import Products from './components/Products';
import products from './store/products';
import Cart from './components/Cart';
import Countries from './components/Countries';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/todolist" element={<Todolist></Todolist>}></Route>
                <Route path="/counter" element={<Counter></Counter>}></Route>
                <Route path="/products" element={<Products></Products>}></Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>
                <Route path="/countries" element={<Countries></Countries>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
