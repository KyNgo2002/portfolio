import './ExperienceDropdown.css'

function ExperienceDropdown (props) {
    return (
        <div className={props.selected == props.id ? "Experience-Dropdown-Show" : "Experience-Dropdown-Hide"}>
            <header className="Experience-Header">
                <div className="Subsection">
                    {props.Location}
                </div>
                <div className="Subsection">
                    {props.RemotePerson}  
                </div>
                <a 
                    href={props.WebLink}
                    className="Subsection"
                    target="_blank"
                    style={{color: 'black'}}
                >
                    {props.WebLink}
                </a>
            </header>
            
            <div className="Job-Description">
                {props.JobDescription}
            </div>
            <div className="Skills-List">
                {props.SkillList.map((skill, key) =>
                <div key={key} className="Skills">{skill}</div>
                )}
            </div>
        </div>
    );
}

export default ExperienceDropdown;
