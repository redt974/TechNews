// CookieConsent.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const CookieConsent = () => {
  useEffect(() => {
    const executeCodes = () => {
      if (document.cookie.includes("codinglab")) return;

      const cookieBox = document.querySelector(".cookie-popup"),
        buttons = document.querySelectorAll(".button");

      cookieBox.classList.add("show");

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          cookieBox.classList.remove("show");

          if (button.id === "acceptBtn") {
            document.cookie = "cookieBy=codinglab; max-age=" + 60 * 60 * 24 * 30; // 30 jours
          }
        });
      });
    };

    executeCodes();

    // Cleanup event listeners when component unmounts
    return () => {
      const buttons = document.querySelectorAll(".button");
      buttons.forEach((button) => {
        button.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="cookie-popup">
      <header className='cookie-header'>
        <i className="fa-solid fa-cookie-bite icon-cookie"></i>
        <h2>Politique des cookies</h2>
      </header>

      <div className="data">
        <p>
        Ce site Web utilise des cookies pour vous aider à avoir une expérience de navigation supérieure et plus pertinente sur le site Web.{' '}
          <Link to="/error"> En savoir plus...</Link>
        </p>
      </div>

      <div className="buttons">
        <button className="button" id="acceptBtn">
          Accept
        </button>
        <button className="button" id="declineBtn">
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
