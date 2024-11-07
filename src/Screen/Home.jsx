import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Analytics from '../Components/Analytics';
import Newsletter from '../Components/Newsletter';
import Pakages from '../Components/Pakages';
import Footer from '../Components/Footer';


function Home(props) {
    return (
       
      
      <div style={{width:"100", margin:-8}}>
        <Navbar/>
        <Hero/>
        <Analytics/>
        <Newsletter/>
        <Pakages/>
        <Footer/>
      </div>
      
    
    );
}

export default Home;