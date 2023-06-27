import './Experience.css'

function Experience(props) {
    return (
        <div className="Experience-Card" onClick={() => props.onClick(props.id)}>
            <div className="Experience-Left">
                <div className="Position">
                    {props.Position}
                </div>
                <div className="Company-Name">
                    @ {props.CompanyName}
                </div>
            </div>
            <div className="Timeframe">{props.Timeframe}</div>
            <div className="Dropdown-Symbol">{props.selected == props.id ? "-": "+"}</div>
        </div>
    );
}

export default Experience;