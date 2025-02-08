import React from 'react'
import Register from './register'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import LoginPage from './login';
import Header from './header';
import Footer from './footer';
import Contact from './contact';
import About from './about';
import ProductPage from './ProductsPage';
import Home from './home';
import ProductsInformation from './productsInformation';
function LandingPage() {
  return (
    <main>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<div><Header /> <Outlet/> <Footer/></div>}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="products" element={<ProductPage />} />
                <Route path="contact" element={<Contact />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="/product/:id" element={<ProductsInformation/>} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Route>
        </Routes>
        </BrowserRouter>
    </main>
  )
}

export default LandingPage;


/*

        */