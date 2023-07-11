import React from 'react';

function Main() {
    return (
        <>
            <div id="mainContainer" style={{backgroundColor:"lavender"}}>
                <div id="aboutMe"
                style={{padding: "10%"}}>
                    <h2>About Me</h2>
                    <p>My name is Dylan. I am an 24 year old amateur web developer learning out of Raleigh NC. I was drawn into the field for the creativity it brings. I enjoy learning to build dynamic and modern websites for clients. I am constantly challenging myself to try new things and build new skills to become a better developer. I am dabbling in a little software development to be able to provide the full package to clients going forward. </p>
                </div>
                <div id="previousAnchor">
                    <h3>My Previous Works</h3>
                    <ul style={{listStyleType: "none"}}>
                        <div>
                            <a href="https://wcet.waketech.edu/dtjones2/WEB115/finalProject/finalProject.html" target="_blank"><li style={{marginBottom: "10px", fontSize: "25px"}}>JavaScript Resume Builder</li></a>
                            <img src="/img/resumeBuilderForm.png" alt="resume builder form" style={{height: "400px", marginRight: "10px"}}></img>
                            <img src="/img/resumeOutput.png" alt="Resume Output" style={{height: "400px"}}></img>
                        </div>
                        <div>
                            <a href="https://wcet.waketech.edu/dtjones2/WEB140/viciousCyclesProject/html/index.html" target="_blank"><li style={{ fontSize: "25px"}}>Vicious Cycles Project</li></a>
                            <img src="/img/viciousCyclesWebsite.png" alt="Vicious Cycles Homepage" style={{height: "400px"}}></img>
                        </div>
                        <div>
                            <li>To Be Determined</li>
                        </div>
                    </ul>
                </div>
            </div>
        
        </>
        
    )
}
export default Main;