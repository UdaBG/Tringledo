import React, { PureComponent } from 'react';

function Navbar() {

    return (


        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: 'black', height: 100, justifyContent: 'center' }}>

            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', gap: 700, alignItems: 'center' }}>
                {/* company name */}

                <div >
                    <div >
                        <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', color: '#00df9a', fontSize: 35, marginTop: 29 }}>Tringledo</h1>
                    </div>
                </div>








                <div style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>

                    {/* home */}
                    <div>
                        <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', color: 'white', fontSize: 17, marginTop: 29 }}>Home</h1>
                    </div>

                    {/* company */}
                    <div>
                        <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', color: 'white', fontSize: 17, marginTop: 29 }}>Company</h1>
                    </div>

                    {/* resources */}
                    <div>
                        <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', color: 'white', fontSize: 17, marginTop: 29 }}>Resources</h1>
                    </div>

                    {/* about */}
                    <div >
                        <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', color: 'white', fontSize: 17, marginTop: 29 }}>About</h1>
                    </div>

                    {/* contact */}
                    <div>
                        <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', color: 'white', fontSize: 17, marginTop: 29 }}>Contact</h1>
                    </div>
                </div>

            </div>
        </div>

    );
}





export default Navbar;