import "./Navbar.scss";
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(){
    let nav = document.querySelector('.navbar');
    nav?.addEventListener("click", (e)=>{
        e.stopPropagation();
    });
    document.addEventListener("click",()=>{
        if(!nav?.classList.contains('toggle')){
            nav?.classList.add('toggle');
        }
        
    })
    function toggleNavbar(e:Event){
        e.stopPropagation();
        nav?.classList.remove('toggle');
    }

    return <div className="nav-container">
        <div className="toggle-icon">
        <FontAwesomeIcon icon={faBarsStaggered} onClick={(e)=> toggleNavbar(e)}/>
        </div>
        <div className="navbar toggle">
        <div className="image-container">
            <img src={logo} alt="recipe" />
        </div>
        <div className="links">
            <Link to="/" className="active"><FontAwesomeIcon icon={faUtensils} />Meals</Link>
            <Link to="/"><FontAwesomeIcon icon={faUtensils} />Ingrediants</Link>
            <Link to="/"><FontAwesomeIcon icon={faUtensils} />Area</Link>
        </div>
    </div>
    </div>
}