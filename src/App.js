import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About'; // Assuming you have an About component
import Trechi from './Trechi';
import Lux from './Lux';
import Swiss from './Swiss';
import {Routes,Route } from 'react-router-dom';
function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
         <Route path='/' element={<Home/>}/>  
         <Route path='about' element={<About/>}/>
         <Route path='Trechi' element={<Trechi/>}/>
         <Route path='Lux' element={<Lux title="Luxemberg Trams"/>}/>
         <Route path='Swiss' element={<Swiss/>}/>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
