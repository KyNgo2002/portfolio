import './Projects.css'
import PA from '../images/Path.PNG'


function Path() {
    return (
        <div 
            className="Path Project"
            onClick={()=>window.open(window.open("https://github.com/KyNgo2002/Pathfinding-Visualizer", '_blank'))}
        >
            <div className="Img-Container">
                <img
                    alt='Pathfinding Visualizer'
                    src={PA}
                    className="Project-Img"
                ></img>
            </div>

            <div className='Project-Text'>
                Pathfinding Visualizer
            </div>
        </div>
    );
}

export default Path;