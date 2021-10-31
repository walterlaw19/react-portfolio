import react from "react";

function Navigation(props) {
    return(
        <nav>
            <ul>
                <li>
                    <a href="#about-me" onClick={()=>{props.setPage('About')}}>About me</a>
                </li>
                <li>
                    <a href="#contact" onClick={()=>{props.setPage('Contact')}}>Contact</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={()=>{props.setPage('Portfolio')}}>Portfolio</a>
                </li>
                <li>
                    <a href="#resume" onClick={()=>{props.setPage('Resume')}}>Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;