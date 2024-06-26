import { useState } from 'react';
import React from 'react';
import laptop from '../Asset/Images/laptop.jpg'

function Analytics() {

    const [ishovered, setishovered] = useState(false)

 
        return (
            <div style={{marginTop:60,width:'100%'}}>
                <div style={{display:'flex', flexDirection:'row',width:'100%', justifyContent: 'center',gap:40 , alignItems: 'center'}}>
                    <div style={{width:"50%"}}>
                        <img style={{width:'100%', height: 'auto',objectFit:'cover'}} src={laptop} alt="" />
                    </div>

                    <div style={{width: '50%'}}>
                        <h1 style={{fontFamily: 'Trebuchet MS, sans-serif',fontSize:17, color:'#39FF14'}}>DATA ANALYTICS DASHBOARD</h1>
                        <h1 style={{fontFamily: 'Montserrat, sans-serif',fontWeight:'bold'}}>Manage Data Analytics Centrally</h1>
                        <p style={{ fontFamily: 'Open Sans, sans-serif'}}>Lorem Ipsum is simply dummy te`xt of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button 
                        onMouseEnter={() => setishovered(true)}
                        onMouseLeave={() => setishovered(false)}
                        
                        style={{fontSize:20, marginTop:30, backgroundColor: ishovered? '#00df9a': 'black', color: ishovered? 'white':'#00df9a', height:50, width:200, borderRadius:10}}>Get Started</button>
                    </div>


                </div>
            </div>
        );
  


};

export default Analytics;