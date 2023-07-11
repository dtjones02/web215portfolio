import React from 'react';
import selfie from '../images/selfie.jpg';



function Header() {
    return (
        < >
            <div id="headerContainer" style={{height: "400px", backgroundColor: 'lavender', width: "100%", display: '-ms-grid'}}>
                <div style={{float: "left", width: "60%", height: "400px", backgroundColor: 'lavender', marginLeft: "0", textAlign: "center"}}>
                    <h1>Dylan Jones</h1>
                    <h2>Software Developer</h2>
                    <nav>
                        <ul style={{listStyleType: "none", fontSize: "25px"}}>
                            <a href="#aboutMe"><li>About Me</li></a>
                            <a href="#previousAnchor"><li>Previous Work</li></a>
                            <a href="#contacts"><li>Contact Me</li></a>
                        </ul>
                    </nav>
                </div>
                <div style={{display: "inline", float: "right", width: "auto", height: "400px", backgroundColor: 'lavender', textAlign: "center"}}>
                    <img src={selfie} alt="me"
                    style={{height: "400px", borderRadius: "50%"}}
                    />
                </div>

            </div>
            
        </>
        
        
    
    );
    
}
export default Header;