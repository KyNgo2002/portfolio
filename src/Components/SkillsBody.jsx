import './SkillsBody.css'
import Skill from './Skill.jsx'
import Software from '../images/Software.png'
import React from '../images/React.png'
import SQL from '../images/SQL.png'

function SkillsBody() {
    let description1 = "Experience with functional programming, OOP, and Software development cycle through coursework and personal projects.";
    let description2 = "Experience with designing efficient and aesthetic user interfaces through personal projects and internship experience.";
    let description3 = "Experience with relational databases and other back end technologies through the construction of multiple full stack";
    let description4 = "Slight exposure to backend procedures and technologies through previous internship. TO BE IIMPROVED.";
    let Skills1 = "C/C++, Python, JavaScript "
    let Skills2 = "HTML, CSS, JavaScript, React"
    let Skills3 = "TO BE LEARNED"

    return (
        <div className="Skills-Body">
            <div className="Skillset-Text">My Skillset...</div>
            <div className="Skills-Box">
                <Skill 
                    SkillName="Software Development"
                    Description={description1}
                    Image={Software}
                    Skills={Skills1}
                    Color={"#30C5FF"}
                ></Skill>
                <Skill
                    SkillName="Front-End Development"
                    Description={description2}
                    Image={React}
                    Skills={Skills2}
                    Color={'#FDDA0D'}
                ></Skill>
                <Skill
                    SkillName="Back-End Development"
                    Description={description4}
                    Image={SQL}
                    Skills={Skills3}
                    Color={'#FF10F0'}
                ></Skill>
            </div>
        </div>
    );
}

export default SkillsBody;