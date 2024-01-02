import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./index.css"

import technews_light from "../../Assets/TechNews-light-mode.png";
import technews_dark from "../../Assets/TechNews-dark-mode.png";
import moon from "../../Assets/moon.png";
import sun from "../../Assets/sun.png";

function Header() {

  const [isHeaderActive, setHeaderActive] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleHeader = () => {
    setHeaderActive(prevState => !prevState);
  };

  useEffect(() => {
    const icon = document.getElementById("icon");
    const logo1 = document.getElementById("logo-header");
    const logo2 = document.getElementById("logo-footer");

    if (icon && logo1 && logo2) {
      if (theme === 'light') {
        icon.src = moon;
        logo1.src = technews_light;
        logo2.src = technews_light;
        document.body.classList.remove("dark-theme");
      } else if (theme === 'dark') {
        icon.src = sun;
        logo1.src = technews_dark;
        logo2.src = technews_dark;
        document.body.classList.add("dark-theme");
      }
    }
  }, [theme]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      mettreAJourHeure();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const mettreAJourHeure = () => {
    const maintenant = new Date();
    const heures = maintenant.getHours();
    const minutes = maintenant.getMinutes();
    const secondes = maintenant.getSeconds();

    const heureActuelle = `${(heures < 10) ? "0" + heures : heures}:${(minutes < 10) ? "0" + minutes : minutes}:${(secondes < 10) ? "0" + secondes : secondes}`;

    document.getElementById("heure").innerText = heureActuelle;
  };

  return (
    <header className={`myHeader ${isHeaderActive ? 'active' : ''}`}>
        <div className="top-header">
            <Link to="/"><img id="logo-header" src={technews_light} alt="Logo-TechNews"/></Link>
            <div className="barre-recherche">
                <button type="submit"><i className="fa-solid fa-magnifying-glass fa-xl loupe"></i></button>
                <input type="text" placeholder="Rechercher..."/>
            </div>
            <div className={`toggle-btn ${isHeaderActive ? 'active' : ''}`} onClick={toggleHeader}>
              <i className={`fa-solid fa-bars fa-xl burger ${isHeaderActive ? 'hidden' : ''}`}></i>
              <i className={`fa-solid fa-xmark fa-2xl crossBurger ${isHeaderActive ? '' : 'hidden'}`}></i>
            </div>
            <nav>
            <ul className="onglets">
                <li><Link className="style accueil" to="/"><p>ACCUEIL</p></Link></li>
                <li><Link className="style" to="/test"><p>TESTS</p></Link></li>
                <li><Link className="style" to="/tech"><p>TECH</p></Link></li>
                <li><Link className="style" to="/mobilite"><p>MOBILITÉ</p></Link></li>
                <li><Link className="style" to="/science"><p>SCIENCE</p></Link></li>
                <li><Link className="style" to="/cine"><p>CINÉ/SÉRIES</p></Link></li>
            </ul>
            </nav>
            <nav className='nav-reseaux'>
            <ul className="social-media-header">
                <li><a href="https://facebook.com/?lang=fr"><i className="fa-brands fa-facebook fa-xl"></i></a></li>
                <li><a href="https://twitter.com/?lang=fr"><i className="fa-brands fa-x-twitter fa-xl"></i></a></li>
                <li><a href="https://youtube.com/?lang=fr"><i className="fa-brands fa-youtube fa-xl"></i></a></li>
                <li><a href="https://instagram.com/?lang=fr"><i className="fa-brands fa-instagram fa-xl"></i></a></li>
                <li><a href="https://tiktok.com/?lang=fr"><i className="fa-brands fa-tiktok fa-xl"></i></a></li>
            </ul>     
            </nav>
        <ul className="header-right">
            <li><div className="connexion"><Link to="/inscription"><i className="fa-solid fa-user fa-lg"></i></Link></div></li>
            <li><img id="icon" src={theme === 'light' ? moon : sun} onClick={toggleTheme} alt="Toggle Theme" /></li>
        </ul>
        </div>
        <div className="band">
            <div className="scrolling-text-container">        
            <div className='table'>
                <p className="scrolling-text">Heure Actuelle :</p>
                <p id="heure" className="slidering-text"></p>
            </div>
            </div>
        </div>
    </header>
    );
}

export default Header;
