import './MeBody.css';
import Check from '../images/Check.png'
import Linked from '../images/Linked.webp'
import Git from '../images/Git.png'
import Mail from '../images/Mail.png'
import Me from '../images/Me.jpeg'


function MeBody () {
    return (
        <div className="Me-Body">
            <div className="Big-Text">Aspiring Software Engineer!</div>
            <div className="Middle-Box">
                <div className="Me-Description">
                    Fourth Year, full Time Student at 
                    the <u>University of California Davis</u>. 
                    Currently pursuing a <u>BS in 
                    Computer Science</u> with a <u>3.8 GPA</u>,
                    and expected to graduate in <u>June of 2024</u>.
                </div> 
                <img src={Me} className="Me"></img>
                <div className="List">
                    <div className="Trait">
                        <img src={Check} className="Check"></img>
                        <div className="Trait-Text">Team Player</div>
                    </div>
                    <div className="Trait">
                        <img src={Check} className="Check"></img>
                        <div className="Trait-Text">Productive Independent worker</div>
                    </div>
                    <div className="Trait">
                        <img src={Check} className="Check"></img>
                        <div className="Trait-Text">Strong Communicator</div>
                    </div>
                </div>
            </div>
            <div className="Icons-Holder">
                <img 
                    src={Linked} 
                    className="Linked im"
                    onClick={()=>window.open(window.open("https://linkedin.com/in/ky-ngo", '_blank'))}
                ></img>
                <img 
                    src={Git} 
                    className="Git im"
                    onClick={()=>window.open(window.open("https://github.com/KyNgo2002", '_blank'))}
                ></img>
                <img 
                    src={Mail} 
                    className="Mail im"
                    onClick={()=>alert("kyngo992@gmail.com :)")}
                ></img>
            </div>
        </div>
    );
}

export default MeBody