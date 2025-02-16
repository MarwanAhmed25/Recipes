import "./Navbar.scss";
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(){

    return <div className="navbar">
        <div className="image-container">
            <img src={logo} alt="recipe" />
        </div>
        <div className="links">
            <Link to="/" className="active"><FontAwesomeIcon icon={faUtensils} />Meals</Link>
            <Link to="/"><FontAwesomeIcon icon={faUtensils} />Ingrediants</Link>
            <Link to="/"><FontAwesomeIcon icon={faUtensils} />Area</Link>
        </div>
    </div>
}