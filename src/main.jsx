
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { createRoot } from 'react-dom/client'
import './index.css'

import { store } from './Stored/stores.js'
import Home from './Component/Home.jsx'
import SecondaryHome from './Component/SecondaryHome.jsx'
import Restaurant from './Component/Restaurant.jsx'
import RestaurantMenu from './Component/RestaurantMenu.jsx'
import SearchFood from './Component/SearchFood.jsx'
import Checkout from './Component/Checkout.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route element={<SecondaryHome />}>
          <Route path="/restaurant" element={<Restaurant />}></Route>
          <Route path="/city/delhi/:id" element={<RestaurantMenu />}></Route>
          <Route path="/city/delhi/:id/search" element={<SearchFood />}></Route>
        </Route>
        <Route path="/Checkout" element={<Checkout />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
