import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Heading  from "./components/Heading";


const root = ReactDOM.createRoot(document.getElementById('sophia'));
root.render(
    <React.StrictMode>
        <App/>

        <h1>Presentation Class</h1>
        <Heading/>
        <About/>
        <Products/>
        <Contact/>

    </React.StrictMode>
);

