import react from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";

function Header(props) {

    return (
        
            <header>
                <h1>Walter A. Gonzales</h1>
                <Navigation setPage={props.setPage} />

            </header>

            

        
    )

}

export default Header;