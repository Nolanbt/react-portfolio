import React from "react";

function Project(props) {
    return (
        <div className="card text-center col-4 mx-2 rounded my-1 shadow-lg" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.about}</p>
                <a href={props.href}><img className="img-thumbnail" src={props.img} alt="Project Thumbnail"></img></a>
            </div>
        </div>
    );
}

export default Project;