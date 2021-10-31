import react from "react";

function Project(props) {
    return (
        <div id={props.id} class="rows">
            <a href={props.link} target="blank" title={props.title}> {props.title}</a>
        </div>
    )
}

export default Project;