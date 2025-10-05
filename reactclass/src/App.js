import React from 'react';
//APP component
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Heading  from "./components/Heading";

function App() {
  return (
    <div>
   <h2>This is my react app with 4 components</h2>
   <h1>Presentation Class</h1>
   <Heading/>
   <About/>
   <Products/>
   <Contact/>
    </div>
  );
}

export default App;
