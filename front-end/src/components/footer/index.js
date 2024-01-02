import "./index.css"
import { Link } from 'react-router-dom';

import technews_light from "../../Assets/TechNews-light-mode.png";

function Footer() {
    return (
        <footer>
            <img id="logo-footer" src={technews_light} alt="Logo-TechNews"/>
            <ul className="liens">
            <li><Link className="style" to="/error"><p>Mentions légales</p></Link></li>
            <li><Link className="style" to="/contact"><p>Contact</p></Link></li>
            <li><Link className="style" to="/error"><p>Politique Cookies</p></Link></li>
            <li><Link className="style" to="/error"><p>Confidentialité</p></Link></li>
            </ul>
            <ul className="social-media-footer">
            <li><a href="https://facebook.com/?lang=fr"><i className="fa-brands fa-facebook fa-xl"></i></a></li>
            <li><a href="https://twitter.com/?lang=fr"><i className="fa-brands fa-x-twitter fa-xl"></i></a></li>
            <li><a href="https://youtube.com/?lang=fr"><i className="fa-brands fa-youtube fa-xl"></i></a></li>
            <li><a href="https://instagram.com/?lang=fr"><i className="fa-brands fa-instagram fa-xl"></i></a></li>
            <li><a href="https://tiktok.com/?lang=fr"><i className="fa-brands fa-tiktok fa-xl"></i></a></li>
            </ul>
            <p className="copyright">&copy; VANDIER Thibaut & GIGON Jude</p>
        </footer>
    );
  }
  
  export default Footer;
  