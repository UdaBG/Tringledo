import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';

function Hero() {


const [ishovered, setishovered] = useState(false)




    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@400&display=swap" rel="stylesheet" />
            <div style={{ width: '100%', height: '80vh', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ textAlign: 'center', maxWidth: '900px' }}>
                    <h1 style={{ color: '#00df9a', fontSize: 16, fontFamily: 'Montserrat, sans-serif', letterSpacing: '2px', marginBottom: '20px' }}>GROWING WITH DATA ANALYTICS</h1>
                    <h1 style={{ color: 'white', fontSize: 60, fontFamily: 'Montserrat, sans-serif', marginBottom: '10px', fontWeight:'bold' }}>Grow with data</h1>
                    <h1 style={{ color: 'white', fontSize: 24, fontFamily: 'Open Sans, sans-serif', marginBottom: '20px' }}>
                        Fast flexible financing for{' '}
                        <ReactTyped strings={[' BTB ', ' BTC ', ' SAAS ']} typeSpeed={120} backSpeed={140} loop />
                    </h1>

                    <h1 style={{ color: 'white', fontSize: 18, fontFamily: 'Open Sans, sans-serif', lineHeight: '1.5', marginBottom: '30px' }}>
                        Monitor your data analytics to increase revenue for BTB, BTC & SAAS platform
                    </h1>
                    <div>
                    <button
                               onMouseEnter={() => setishovered(true)}
                               onMouseLeave={() => setishovered(false)}
                    
                    style={{ width: 200, height: 50, borderRadius: 10, backgroundColor: '#00df9a', fontFamily: 'Open Sans, sans-serif', fontSize: '16px', fontWeight: 'bold', color: 'black',  boxShadow: ishovered? '0px 4px 8px #39FF14' : "" }}>Get Started</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
