import './Projects.css'
import LOLI from '../images/LoL.PNG'


function LoL(props) {
    return (
        <div 
            className="LoL Project"
            onClick={()=>window.open(window.open("https://github.com/AMDB900/League-of-Legends-Challenger-Grandmaster-Outcome-Predictor", '_blank'))}    
        >
            <div className="Img-Container">
                <img
                    alt='League of Legends Match Predictor'
                    src={LOLI}
                    className="Project-Img"
                ></img>
            </div>

            <div className='Project-Text'>
                League of Legends Match Predictor
            </div>
        </div >
    );
}

export default LoL;