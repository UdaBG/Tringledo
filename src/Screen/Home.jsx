import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Analytics from '../Components/Analytics';
import Newsletter from '../Components/Newsletter';

function Home(props) {
    return (
       
      <>
        <Navbar/>
        <Hero/>
        <Analytics/>
        <Newsletter/>

        </>
    
    );
}

export default Home;