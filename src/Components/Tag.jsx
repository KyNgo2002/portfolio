import './Tag.css'

function Tag(props) {
    return (
        <div className="Tag">
            <u className="TagColor">{props.tag}</u>
        </div>
    );
}

export default Tag;