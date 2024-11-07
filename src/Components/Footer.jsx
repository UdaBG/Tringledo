import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

function Footer() {

    const [ishoveredFb, setishoveredFb] = useState(false)
    const [ishoveredIg, setishoveredIg] = useState(false)
    const [ishoveredX, setishoveredX] = useState(false)
    const [ishoveredGit, setishoveredGit] = useState(false)
    const [ishoveredLn, setishoveredLn] = useState(false)




    return (

        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'black', height:350 }}>
            <div style={{ display: 'flex', flexDirection: 'row'}}>
                {/* ........................................................*/}

                <div style={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
                    <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', color: '#00df9a', fontSize: 35, marginTop: 69, marginLeft: 150 }}>
                        Tringledo
                    </h1>
                    <p style={{ fontFamily: 'Open Sans, sans-serif', color: 'white', marginLeft: 120, marginTop: 5, fontSize:15 }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 120, marginTop: 20, gap: 40 }}>
                        <i className="fab fa-facebook icon"

                            onMouseEnter={() => setishoveredFb(true)}
                            onMouseLeave={() => setishoveredFb(false)}
                            style={{ cursor: 'pointer', color: ishoveredFb ? '#4267B2' : 'white', fontSize: 30, marginRight: 15, scale: ishoveredFb ? '110%' : '100%', transition: '0.2s' }}></i>


                        <i className="fab fa-instagram icon"

                            onMouseEnter={() => setishoveredIg(true)}
                            onMouseLeave={() => setishoveredIg(false)}
                            style={{ cursor: 'pointer', color: ishoveredIg ? '#C13584' : 'white', fontSize: 30, marginRight: 15, scale: ishoveredIg ? '110%' : '100%', transition: '0.2s' }}></i>


                        <i className="fab fa-x-twitter icon"

                            onMouseEnter={() => setishoveredX(true)}
                            onMouseLeave={() => setishoveredX(false)}
                            style={{ cursor: 'pointer', color: ishoveredX ? '#1DA1F2' : 'white', fontSize: 30, marginRight: 15, scale: ishoveredX ? '110%' : '100%', transition: '0.2s' }}></i>


                        <i className="fab fa-github icon"

                            onMouseEnter={() => setishoveredGit(true)}
                            onMouseLeave={() => setishoveredGit(false)}
                            style={{ cursor: 'pointer', color: ishoveredGit ? '#333' : 'white', fontSize: 30, marginRight: 15, scale: ishoveredGit ? '110%' : '100%', transition: '0.2s' }}></i>


                        <i className="fab fa-linkedin icon"

                            onMouseEnter={() => setishoveredLn(true)}
                            onMouseLeave={() => setishoveredLn(false)}
                            style={{ cursor: 'pointer', color: ishoveredLn ? '#0077B5' : 'white', fontSize: 30, marginRight: 15, scale: ishoveredLn ? '110%' : '100%', transition: '0.2s' }}></i>
                    </div>
                </div>

                {/* ....................................................... */}
                <div style={{display:'flex', marginTop: 79, width:'90%', marginLeft:60}}>
                <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', }}>
                    <ul style={{fontFamily: 'Open Sans, sans-serif', cursor: 'pointer', color:'white', width:200, fontSize:14}}>Solutions</ul>
                    <ul style={{fontFamily: 'Open Sans, sans-serif', cursor: 'pointer',color:'white', width:200, fontSize:14 }}>Support</ul>
                    <ul style={{fontFamily: 'Open Sans, sans-serif', cursor: 'pointer',color:'white', width:200, fontSize:14 }}>Company</ul>
                    <ul style={{fontFamily: 'Open Sans, sans-serif', cursor: 'pointer',color:'white',width:100, fontSize:14}}>Legal</ul>
                    <ul style={{fontFamily: 'Open Sans, sans-serif', cursor: 'pointer',color:'white', width:200, marginTop:10}}>Analysis</ul>
                    <ul style={{fontFamily: 'Open Sans, sans-serif', cursor: 'pointer',color:'white', width:200, marginTop:10, fontSize:14}}>Pricing</ul>
                    <ul style={{fontFamily: 'Open Sans, sans-serif', cursor: 'pointer',color:'white', width:200, marginTop:10, fontSize:14}}>About</ul>
                    <ul style={{fontFamily: 'Open Sans, sans-serif', cursor: 'pointer',color:'white', width:100, marginTop:10, fontSize:14}}>Claims</ul>
                    <ul style={{fontFamily: 'Open Sans, sans-serif', cursor: 'pointer',color:'white', width:200, marginTop:10, fontSize:14}}>Marketing</ul>
                    <ul style={{fontFamily: 'Open Sans, sans-serif', cursor: 'pointer',color:'white', width:200, marginTop:10, fontSize:14}}>Documentations</ul>
                    <ul style={{fontFamily: 'Open Sans, sans-serif', cursor: 'pointer',color:'white', width:200, marginTop:10, fontSize:14}}>Blog</ul>
                    <ul style={{fontFamily: 'Open Sans, sans-serif', cursor: 'pointer',color:'white', width:100, marginTop:10, fontSize:14}}>Policy</ul>
                    <ul style={{fontFamily: 'Open Sans, sans-serif', cursor: 'pointer',color:'white', width:200, marginTop:10, fontSize:14}}>commerce</ul>
                    <ul style={{fontFamily: 'Open Sans, sans-serif', cursor: 'pointer',color:'white', width:200, marginTop:10, fontSize:14}}>Blog</ul>
                    <ul style={{fontFamily: 'Open Sans, sans-serif', cursor: 'pointer',color:'white', width:200, marginTop:10, fontSize:14}}>Guides</ul>
                    <ul style={{fontFamily: 'Open Sans, sans-serif', cursor: 'pointer',color:'white', width:100, marginTop:10, fontSize:14}}>Jobs</ul>
                    <ul style={{fontFamily: 'Open Sans, sans-serif', cursor: 'pointer',color:'white', width:200, marginTop:10, fontSize:14}}>Terms</ul>
                    <ul style={{fontFamily: 'Open Sans, sans-serif', cursor: 'pointer',color:'white', width:200, marginTop:10, fontSize:14}}>Insights</ul>
                    <ul style={{fontFamily: 'Open Sans, sans-serif', cursor: 'pointer',color:'white', width:200, marginTop:10, fontSize:14}}>API Status</ul>
                    <ul style={{fontFamily: 'Open Sans, sans-serif', cursor: 'pointer',color:'white', width:100, marginTop:10, fontSize:14}}>Press</ul>

                </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
