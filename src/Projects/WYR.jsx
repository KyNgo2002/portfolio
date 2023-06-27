import './Projects.css'
import WY from '../images/WYR.PNG'


function WYR(props) {
    return (
        <div 
            className="WYR Project"
            onClick={()=>window.open(window.open("https://would-you-rather-d7904.web.app/", '_blank'))}
        >
            <div className="Img-Container">
                <img
                    alt='Would You Rather'
                    src={WY}
                    className="Project-Img"
                ></img>
            </div>
            <div className='Project-Text'>
                Would You Rather Web Page
            </div>
        </div>
    );
}

export default WYR;