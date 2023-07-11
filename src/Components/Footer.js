import React from 'react';

function Footer() {
    return (
        <>
            <div id="footerContainer" style={{backgroundColor: "lavender", height: "250px"}}>
                <div id="contacts" style={{display: "inline", float: "left", width: "50%"}}>
                    <h4>Contact Me</h4>
                    <p>Email: myemail@gmail.com</p>
                    <p>Phone: 123-456-7890</p>
                    <p>9101 Fayetteville Rd, Raleigh, NC 27603 </p>

                </div>
                    <div id="socials" style={{padding: "10%"}}>
                    <a href="https://wwww.facebook.com" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png" width="100" alt="Facebook Symbol, Facebook Logos Within A White Square" /></a>
                    <a href="https://www.twitter.com" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" width="100" alt="twitter logo vector png clipart" /></a>
                    <a href="https://www.instagram.com" title="Image from freepnglogos.com"><img src="https://www.freepnglogos.com/uploads/download-instagram-png-logo-20.png" width="100" alt="Download instagram png logo" /></a>
                </div>
            </div>
        
        </>
        
    )
}
export default Footer;