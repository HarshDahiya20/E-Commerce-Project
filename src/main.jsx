import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './componets/pages/Home'
import About from './componets/pages/About'
import Product from './componets/pages/Product'
import Cart from './componets/pages/Cart'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './componets/common/Layout'
import ProductDetils from './componets/pages/ProductDetils'
import MainContextFile from './componets/context/MainContextFile'

createRoot(document.getElementById('root')).render(
    
    <MainContextFile>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={'/'} element={<Home />} />

                    <Route path={'/about-us'} element={<About />} />

                    <Route path={'/product/:categoryslug?'} element={<Product />} />

                    <Route path={'/product-details/:slug'} element={<ProductDetils/>} />

                    <Route path={'/cart'} element={<Cart />} />
                </Route>


            </Routes>
        </BrowserRouter>
    </MainContextFile>
    
)
