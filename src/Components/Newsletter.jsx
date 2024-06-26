import React from 'react';


function Newsletter (){
    
        return (
            <div style={{backgroundColor:'black', height: 300, alignContent:'center',justifyContent:"center"}}>
                <div style={{display: 'flex', flexDirection: 'row',justifyContent:'center',alignContent:'center'}}>
                 <div style={{display: 'flex', flexDirection: 'column', width:'50%', marginLeft: 30}}>
                    <h1 style={{fontFamily: 'Trebuchet MS, sans-serif',fontSize:25, color:'white', fontWeight:'bold'}}>Want tips & tricks to optimize your flow ?</h1>
                    <h1 style={{fontFamily: 'Trebuchet MS, sans-serif',fontSize:17, color:'white'}}>Sign up to our Newsletter and stay up to date</h1>
                 </div>

                 <div>
                    <div style={{display: 'flex', flexDirection: 'row', width:'100%', gap: 20 ,marginTop: 40}}>
                        <input style={{width:250, borderRadius:10, height:45}}  type="text" placeholder='Enter Your Email'/>
                        <button style={{backgroundColor:'#00df9a',width:200, borderRadius:10, height:45}}>Notify Me</button>
                    </div>

                    <h1 style={{fontFamily: 'Trebuchet MS, sans-serif',fontSize:17, color:'white'}}>We care about the protection of data. Read our <span style={{fontFamily: 'Trebuchet MS, sans-serif',fontSize:17, color:'#39FF14'}}>Privacy Policy</span></h1>

                 </div>

                </div>
            </div>
        );










    }




export default Newsletter;