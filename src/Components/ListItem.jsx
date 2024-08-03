import './ListItem.css'
import Tag from'./Tag.jsx'
import React from "react";

function ListItem(props) {
    let i = 0;
    return (
        <div className="ListItem">
            <a className="title" target="_blank" rel="noreferrer" href = {props.Link}><u>{props.Title} ⟶</u></a>
            <div className="date">{props.Date}</div>
            <div className="description">{props.Description}</div>
            <div className="tags">
                {props.Tags && props.Tags.map((tag) => 
                    <Tag tag={tag}key={i++}></Tag>
                )}
            </div>
            
        </div>
    );
}

export default ListItem;