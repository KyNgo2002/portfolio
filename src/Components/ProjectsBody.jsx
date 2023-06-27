import './ProjectsBody.css';
import PM from '../Projects/PM.jsx'
import LoL from '../Projects/LoL.jsx'
import Path from '../Projects/Path.jsx'
import Audio from '../Projects/Audio.jsx'
import WYR from '../Projects/WYR.jsx'

function ProjectsBody() {
    return (
        <div className="Projects-Body">
            <div className="Skillset-Text">Some of my work...</div>
                <div className="Project-Row">
                    <PM></PM>
                    <Path></Path>
                </div>
                <div className="Project-Row">
                    <Audio></Audio> 
                    <WYR></WYR>
                </div>
                <div className="Project-Row">
                    <LoL></LoL>
                </div>
            </div>
        
    );
}

export default ProjectsBody;