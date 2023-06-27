import './Projects.css'
import Au from '../images/Audio.PNG'

function Audio(props) {
    return (
        <div 
            className="Audio Project"
            onClick={()=>alert("Github Repo has not been created for this project yet!")}
        >
            <div className="Img-Container">
                <img
                    alt='Audio Visualizer Web Page'
                    src={Au}
                    className="Project-Img"
                ></img>
            </div>

            <div className='Project-Text'>
                Audio Visualizer Web Page
            </div>
        </div>
    );
}

export default Audio;