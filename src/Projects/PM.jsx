import './Projects.css'
import PMI from '../images/PM.PNG'


function PM(props) {
    return (
        <div 
            className="PM Project"
            onClick={()=>window.open(window.open("https://github.com/infinite-options/PM-Web", '_blank'))}
        >
            <div className="Img-Container">
                <img
                    alt='Propery Mangement webpage'
                    src={PMI}
                    className="Project-Img"
                ></img>
            </div>

            <div className='Project-Text'>
                Property Management Web App
            </div>
        </div>
    );
}

export default PM;