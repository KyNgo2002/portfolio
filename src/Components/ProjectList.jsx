import React from 'react';
import './ProjectList.css'
import ListItem from './ListItem.jsx'
import Linked from '../images/Linked.webp'
import Git from '../images/Git.png'
// import Resume from '../images/Resume.png'


function ProjectList(props) {
    return (
        <div className="ProjectListPage" id="ProjList">
            <div className="ProjectHeader">
                Some of my personal work:
            </div>
            <ul className="ProjectList">
                <ListItem 
                    Title ="Multithreaded RayTracer"
                    Date = "December 2023 - Present"
                    Description = "A simple Multithreaded RayTracer built with C++"
                    Tags = {["C++ STL", "ImGUI"]}
                    Link = {"https://github.com/KyNgo2002/MTRT"}
                ></ListItem>
                <ListItem
                    Title ="CubeSat IMU Sensor Telemetry Dashboard"
                    Date = "September 2023"
                    Description = "A simple Multithreaded RayTracer built with C++"
                    Tags = {["Arduino", "Grafana", "InfluxDB"]}
                    Link = {"https://github.com/KyNgo2002/mission-control"}

                ></ListItem>
                <ListItem
                    Title ="League of Legends Match Outcome Predictor"
                    Date = "March 2023 - June 2023"
                    Description = "An AI powered predictor that predicts the outcomes of a LoL match based on various game state variables."
                    Tags = {["Python", "Flask", "AI"]}
                    Link = {"https://github.com/AMDB900/League-of-Legends-Challenger-Grandmaster-Outcome-Predictor"}
                ></ListItem>
                <ListItem
                    Title ="Pathfinding Visualizer"
                    Date = "October 2022"
                    Description = "A visualizer that simulates popular pathfinding algorithms "
                    Tags = {["C++ STL", "SFML", "DS/A"]}
                    Link = {"https://github.com/KyNgo2002/Pathfinding-Visualizer"}
                ></ListItem>
                <ListItem
                    Title ="Audio Visualizer"
                    Date = "August 2022"
                    Description = "An audio visualizer built with the Javascript Web Audio API"
                    Tags = {["HTML", "CSS", "JavaScript", "React", "API"]}
                    Link = {"/"}
                ></ListItem>
                <ListItem
                    Title = "Property Management Web App"
                    Date = "August 2022"
                    Description = "A Web app that streamlines the process of buying, selling, owning, and maintaining properties."
                    Tags = {["HTML", "CSS", "JavaScript", "React", "API"]}
                    Link = {"https://io-pm.netlify.app/"}

                ></ListItem>
            </ul>
            <div className="Footer">
                <div className='Email'>Kyngo992@gmail.com | </div>
                <a href = 'https://www.linkedin.com/in/ky-ngo/' target="_blank" rel="noreferrer"><img src={Linked} className="Icons" alt="LinkedIn Logo"></img></a>
                <a href = 'https://github.com/KyNgo2002' target="_blank" rel="noreferrer"><img src={Git} className="Icons" alt="Github Logo"></img></a>
                {/* <a href = "Ky_s_Resume.pdf" target="_blank"><img src={Resume} className="Icons" alt="Resume Logo"></img></a> */}
            </div>
        </div>
    );
}

export default ProjectList;