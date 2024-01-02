import React, { useState } from 'react';
import Slider from "../components/slider";
import Header from "../components/header";
import Info_top from "../components/info-top";
import Titre from '../components/titre';
import Footer from "../components/footer";
import CookiePopup from "../components/cookies";

import disney from "../Assets/disneytitre.jpg";
import corps from "../Assets/corps.jpg";
import terminator from "../Assets/terminator.jpg";
import marvel from "../Assets/Marvel.jpg";
import voleuse from "../Assets/Voleuse.jpg";
import greve from "../Assets/greve.jpg";
import netflix from "../Assets/netflix.jpg";
import dune from "../Assets/dune.jpg";

function Cine() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const couleurSlider1 = { background: 'linear-gradient(180deg, rgb(255, 165, 180), rgb(66, 0, 66))' };
  const totalSlides = 2 ;

  return (
    <div className="Cine"> 
      <Header/>
      <section id="page">
      <Info_top image={disney} lien="https://www.presse-citron.net/disney-augmente-ses-prix-comment-payer-moins-cher-4-astuces/" titre="Disney+ augmente ses prix : comment payer moins cher ? (4 astuces)"/>
      <Titre texte="NEWS DE CETTE SEMAINE :"/>
      <section className="slider-container">
        <Slider
          items={[
          { link: 'https://www.presse-citron.net/le-probleme-a-3-corps-netflix-pourquoi-cette-serie-audacieuse-va-cartonner/', image: corps, title: "Le Problème à 3 corps (Netflix) : pourquoi cette série audacieuse va cartonner ?", subtitle: "Les créateurs de Game of Thrones proposent une nouvelle série de science-fiction sur Netflix." },
          { link: 'https://www.presse-citron.net/netflix-annonce-le-retour-de-terminator-tout-ce-quon-sait/', image: terminator , title: "Netflix annonce le retour de Terminator : tout ce qu’on sait", subtitle: "Netflix vient de présenter la bande-annonce de sa nouvelle série “Terminator”. Le SVOD a également lâché quelques informations sur le contenu de cette série." },
          { link: 'https://www.presse-citron.net/3-series-marvel-qui-arrivent-bientot-sur-disney/', image: marvel , title: "3 séries Marvel qui arrivent bientôt sur Disney+", subtitle: "On fait le point sur les prochaines séries Marvel qui seront diffusées sur Disney+." },
          { link: 'https://www.presse-citron.net/voleuses-netflix-3-raisons-de-regarder-ce-film-francais-qui-est-un-carton-mondial/', image:voleuse , title: "Voleuses (Netflix) : 3 raisons de regarder ce film français qui est un carton mondial", subtitle: "Voleuses, c’est la bonne surprise de ce mois de novembre sur Netflix." },
        ]}
        currentIndex={currentIndex}
        handlePrev={() => setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides)}
        handleNext={() => setCurrentIndex((currentIndex + 1) % totalSlides)}
        style={couleurSlider1}
        totalSlides={totalSlides}/>
      </section>
      <Titre texte="NEWS CINEMA/SERIE :"/>
      <section className="slider-container">
        <Slider
          items={[
          { link: 'https://www.presse-citron.net/le-probleme-a-3-corps-netflix-pourquoi-cette-serie-audacieuse-va-cartonner/', image: corps , title: "Le Problème à 3 corps (Netflix) : pourquoi cette série audacieuse va cartonner ?", subtitle: "Les créateurs de Game of Thrones proposent une nouvelle série de science-fiction sur Netflix." },
          { link: 'https://www.presse-citron.net/fin-dune-greve-historique-a-hollywood-tout-ce-quil-faut-savoir/', image: greve , title: "Fin d’une grève historique à Hollywood : tout ce qu’il faut savoir", subtitle: "Le soulagement est de mise du côté des studios et des acteurs." },
          { link: 'https://www.presse-citron.net/netflix-privilegie-t-il-la-quantite-au-detriment-de-la-qualite/', image: netflix, title: "Netflix privilégie-t-il la quantité au détriment de la qualité ?", subtitle: "Le débat n’est pas près d’être tranché." },
          { link: 'https://www.presse-citron.net/dune-histoire-casting-date-de-sortie-tout-savoir-sur-la-serie/', image: dune , title: "Dune : histoire, casting, date de sortie, tout savoir sur la série", subtitle: "Les choses se précisent pour ce projet très prometteur." },
        ]}
        currentIndex={currentIndex}
        handlePrev={() => setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides)}
        handleNext={() => setCurrentIndex((currentIndex + 1) % totalSlides)}
        style={couleurSlider1}
        totalSlides={totalSlides}/>
      </section>
      </section>
      <Footer></Footer>
      <CookiePopup/>
    </div>
  );
}

export default Cine;
