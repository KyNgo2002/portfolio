import './Skill.css'

function Skill(props) {
    return (
        <div className="Skill-Card">   
            <header>
                <img 
                    className="Skill-Image" 
                    src={props.Image} 
                    alt={props.SkillName}
                ></img>
                <div className='Skill-Name'>{props.SkillName}</div>
            </header>
            <div className='Skill-Description' style={{borderColor: props.Color}}>{props.Description}</div>
            <div className='Skill-List'>Skills: {props.Skills}</div>
        </div>
    );
}

export default Skill;