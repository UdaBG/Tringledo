import React, { useState } from 'react';
import double from '../Asset/Images/double.png'
import triple from '../Asset/Images/triple.png'
import single from '../Asset/Images/single.png'



function Pakages() {

    const [ishovered1, setishovered1] = useState(false)
    const [ishovered2, setishovered2] = useState(false)
    const [ishovered3, setishovered3] = useState(false)

    return (
        <div>

            <div

                style={{ display: 'flex', flexDirection: 'row', gap: 60, marginBottom: 60, justifyContent: 'center', marginTop: 50 }}>

                <div
                    onMouseEnter={() => setishovered1(true)}
                    onMouseLeave={() => setishovered1(false)}

                    style={{
                        display: 'flex', flexDirection: 'column', height: 500, width: 380, backgroundColor: 'white', marginTop: 20, justifyContent: 'center', textAlign: 'center', gap: 20, scale: ishovered1 ? '105%' : '100%', transition: '0.2s', boxShadow: ishovered1
                            ? '0 10px 20px rgba(0, 0, 0, 0.8), -10px 0 20px rgba(0, 0, 0, 0.2), 10px 0 20px rgba(0, 0, 0, 0.2)'
                            : '0 10px 20px rgba(0, 0, 0, 0.5), -10px 0 20px rgba(0, 0, 0, 0.1), 10px 0 20px rgba(0, 0, 0, 0.1)'
                    }}>

                    <img style={{ width: 80, height: 65, alignSelf: 'center', marginTop: -105, }} src={single} alt="" />

                    <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', fontWeight: 'bold', fontSize: 25 }}>Single User</h1>
                    <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', fontWeight: 'bold', fontSize: 40, marginTop: -5 }}>$ 199</h1>

                    <div style={{ alignItems: 'center', alignSelf: 'center', backgroundColor: 'white', width: '80%', height: 35,boxShadow:'0 10px 20px rgba(0, 0, 0, 0.05), -10px 0 20px rgba(0, 0, 0, 0.05), 10px 0 20px rgba(0, 0, 0, 0.05)' }}>
                        <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', fontSize: 18, marginTop: 8 }}>500 GB Storage</h1>
                    </div>

                    <div style={{ alignItems: 'center', alignSelf: 'center', backgroundColor: 'white', width: '80%', height: 35 ,boxShadow:'0 10px 20px rgba(0, 0, 0, 0.05), -10px 0 20px rgba(0, 0, 0, 0.05), 10px 0 20px rgba(0, 0, 0, 0.05)'  }}>
                        <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', fontSize: 18, marginTop: 8 }}>500 GB Storage</h1>
                    </div>

                    <div style={{ alignItems: 'center', alignSelf: 'center', backgroundColor: 'white', width: '80%', height: 35 ,boxShadow:'0 10px 20px rgba(0, 0, 0, 0.05), -10px 0 20px rgba(0, 0, 0, 0.05), 10px 0 20px rgba(0, 0, 0, 0.05)'  }}>
                        <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', fontSize: 18, marginTop: 8 }}>500 GB Storage</h1>
                    </div>

                    <div style={{ alignContent: 'center' }}>
                        <button style={{ width: 100, backgroundColor: '#00df9a', height: 45, borderRadius: 10, width: 200 , cursor: 'pointer', fontWeight: 'bold', border: 0 }}>Start Trial</button>
                    </div>

                </div>

                <div
                    onMouseEnter={() => setishovered2(true)}
                    onMouseLeave={() => setishovered2(false)}

                    style={{
                        display: 'flex', flexDirection: 'column', height: 500, width: 380, backgroundColor: '#E5E5E5', marginTop: 40, justifyContent: 'center', textAlign: 'center', gap: 20, scale: ishovered2 ? '105%' : '100%', transition: '0.2s', boxShadow: ishovered2
                            ? '0 10px 20px rgba(0, 0, 0, 0.8), -10px 0 20px rgba(0, 0, 0, 0.2), 10px 0 20px rgba(0, 0, 0, 0.2)'
                            : '0 10px 20px rgba(0, 0, 0, 0.5), -10px 0 20px rgba(0, 0, 0, 0.1), 10px 0 20px rgba(0, 0, 0, 0.1)'
                    }}>

                    <img style={{ width: 80, height: 65, alignSelf: 'center', marginTop: -105, }} src={double} alt="" />

                    <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', fontWeight: 'bold', fontSize: 25 }}>Single User</h1>
                    <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', fontWeight: 'bold', fontSize: 40, marginTop: -5 }}>$ 199</h1>

                    <div style={{ alignItems: 'center', alignSelf: 'center', backgroundColor: '#E5E5E5', width: '80%', height: 35,boxShadow:'0 10px 20px rgba(0, 0, 0, 0.09), -10px 0 20px rgba(0, 0, 0, 0.09), 10px 0 20px rgba(0, 0, 0, 0.09)' }}>
                        <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', fontSize: 18, marginTop: 8 }}>500 GB Storage</h1>
                    </div>

                    <div style={{ alignItems: 'center', alignSelf: 'center', backgroundColor: '#E5E5E5', width: '80%', height: 35 ,boxShadow:'0 10px 20px rgba(0, 0, 0, 0.09), -10px 0 20px rgba(0, 0, 0, 0.09), 10px 0 20px rgba(0, 0, 0, 0.09)'  }}>
                        <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', fontSize: 18, marginTop: 8 }}>500 GB Storage</h1>
                    </div>

                    <div style={{ alignItems: 'center', alignSelf: 'center', backgroundColor: '#E5E5E5', width: '80%', height: 35 ,boxShadow:'0 10px 20px rgba(0, 0, 0, 0.09), -10px 0 20px rgba(0, 0, 0, 0.09), 10px 0 20px rgba(0, 0, 0, 0.09)'  }}>
                        <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', fontSize: 18, marginTop: 8 }}>500 GB Storage</h1>
                    </div>

                    <div style={{ alignContent: 'center' }}>
                        <button style={{ width: 100, backgroundColor: 'black', height: 45, borderRadius: 10, width: 200, cursor:'pointer', fontWeight: 'bold', color: '#00df9a', border: 0  }}>Start Trial</button>
                    </div>

                </div>

                <div
                    onMouseEnter={() => setishovered3(true)}
                    onMouseLeave={() => setishovered3(false)}

                    style={{
                        display: 'flex', flexDirection: 'column', height: 500, width: 380, backgroundColor: 'white', marginTop: 20, justifyContent: 'center', textAlign: 'center', gap: 20, scale: ishovered3 ? '105%' : '100%', transition: '0.2s', boxShadow: ishovered3
                            ? '0 10px 20px rgba(0, 0, 0, 0.8), -10px 0 20px rgba(0, 0, 0, 0.2), 10px 0 20px rgba(0, 0, 0, 0.2)'
                            : '0 10px 20px rgba(0, 0, 0, 0.5), -10px 0 20px rgba(0, 0, 0, 0.1), 10px 0 20px rgba(0, 0, 0, 0.1)'
                    }}>

                    <img style={{ width: 80, height: 65, alignSelf: 'center', marginTop: -105, }} src={triple} alt="" />

                    <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', fontWeight: 'bold', fontSize: 25 }}>Single User</h1>
                    <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', fontWeight: 'bold', fontSize: 40, marginTop: -5 }}>$ 199</h1>

                    <div style={{ alignItems: 'center', alignSelf: 'center', backgroundColor: 'white', width: '80%', height: 35,boxShadow:'0 10px 20px rgba(0, 0, 0, 0.05), -10px 0 20px rgba(0, 0, 0, 0.05), 10px 0 20px rgba(0, 0, 0, 0.05)' }}>
                        <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', fontSize: 18, marginTop: 8 }}>500 GB Storage</h1>
                    </div>

                    <div style={{ alignItems: 'center', alignSelf: 'center', backgroundColor: 'white', width: '80%', height: 35 ,boxShadow:'0 10px 20px rgba(0, 0, 0, 0.05), -10px 0 20px rgba(0, 0, 0, 0.05), 10px 0 20px rgba(0, 0, 0, 0.05)'  }}>
                        <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', fontSize: 18, marginTop: 8 }}>500 GB Storage</h1>
                    </div>

                    <div style={{ alignItems: 'center', alignSelf: 'center', backgroundColor: 'white', width: '80%', height: 35 ,boxShadow:'0 10px 20px rgba(0, 0, 0, 0.05), -10px 0 20px rgba(0, 0, 0, 0.05), 10px 0 20px rgba(0, 0, 0, 0.05)'  }}>
                        <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', fontSize: 18, marginTop: 8 }}>500 GB Storage</h1>
                    </div>

                    <div style={{ alignContent: 'center' }}>
                        <button style={{ width: 100, backgroundColor: '#00df9a', height: 45, borderRadius: 10, width: 200, cursor: 'pointer', fontWeight: 'bold', border: 0 }}>Start Trial</button>
                    </div>

                </div>

            </div>

        </div>
    );
}



export default Pakages;