import './ExperienceBody.css'
import {useState} from 'react'
import Experience from './Experience.jsx';
import ExperienceDropdown from './ExperienceDropdown.jsx'

function ExperienceBody() {
    let SkillArray1 = ["HTML", "CSS", "JavaScript", "React", "API", "Git"];
    let SkillArray2 = ["Assembly", "C/C++", "Data Structures"];

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected == i) {
            setSelected(null);
            return;
        }
        setSelected(i)
        
    }

    return (
        <div className="Experience-Body">
            <div className="Skillset-Text">My Professional Experience...</div>
            <div className="Experience-Box">
                <Experience
                    Position="Front-End Development Intern"
                    CompanyName="Infinite Options"
                    Timeframe="April 2022 - July 2022"
                    onClick = {toggle}
                    id={1}
                    selected={selected}
                ></Experience>
                <ExperienceDropdown
                    JobDescription="Contributed to a team of close-knit developers building full stack web applications as a front-end developer. Built dyanmic user interfaces
                    by interacting with various API endpoints to store/extract client information."
                    RemotePerson="Remote"
                    Location="San Jose, California"
                    SkillList={SkillArray1}
                    WebLink="https://infiniteoptions.com"
                    id={1}
                    selected={selected}
                ></ExperienceDropdown>
                <Experience
                    Position="Programming Tutor"
                    CompanyName="University of California, Davis"
                    Timeframe="April 2022 - June 2022"
                    onClick = {toggle}
                    id={2}
                    selected={selected}
                ></Experience>
                <ExperienceDropdown
                    JobDescription="Tutored college students on general programming topics including Assembly language, C/C++ programming, and data structures/algorithms in C++."
                    RemotePerson="Remote"
                    Location="Davis, California"
                    SkillList={SkillArray2}
                    WebLink="https://tutoring.ucdavis.edu/"
                    id={2}
                    selected={selected}
                ></ExperienceDropdown>
            </div>
        </div>
    );
}

export default ExperienceBody;