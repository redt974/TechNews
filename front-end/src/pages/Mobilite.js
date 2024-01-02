import React, { useState } from 'react';
import Slider from "../components/slider";
import Header from "../components/header";
import Info_top from "../components/info-top";
import Titre from '../components/titre';
import Footer from "../components/footer";
import CookiePopup from "../components/cookies";

import Lille from "../Assets/Lille.jpg";
import moteur from "../Assets/moteursv.jpg";
import velo from "../Assets/testvelo.jpg";
import futurv from "../Assets/FuturV.jpg";
import metro from "../Assets/metro.jpg";
import uber from "../Assets/Uber.jpg";
import cb from "../Assets/CB.jpg";

function Mobilite() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const couleurSlider1 = { background: 'linear-gradient(180deg, rgb(194, 108, 51), rgb(71, 39, 20))' };
  const totalSlides = 2;

  return (
    <div className="Mobilite">
    <Header></Header>
    <section id="page">
      <Info_top image={velo} lien="https://www.presse-citron.net/velo-electrique-on-a-essaye-le-systeme-de-freins-abs-de-bosch-une-revolution/" titre="Vélo électrique : on a essayé le système de freins ABS de Bosch, une révolution ?"/>
      <Titre texte="NEWS DE CETTE SEMAINE :"/>
      <section className="slider-container">
        <Slider
          items={[
          { link: 'https://www.presse-citron.net/a-lille-les-automobilistes-sont-payes-sils-evitent-les-bouchons/', image: Lille, title: "À Lille les automobilistes sont payés s'ils évitent les bouchons", subtitle: "Cette initiative est inspirée de ce qui se fait déjà  aux Pays-Bas." },
          { link: 'https://www.presse-citron.net/inspire-des-voitures-ce-nouveau-moteur-pour-velo/', image: moteur, title: "Inspiré des voitures, ce nouveau moteur pourrait arriver dans nos vélos", subtitle: "L’Orbit Drive est un concept de moteur pour vélo électrique inspiré de ce qui existe déjà dans le monde de l’automobile électrique." },
          { link: 'https://www.presse-citron.net/test-navee-v50/', image: velo, title: "Test Navee V50 : Le constructeur des trottinettes haut de gamme Xiaomi se lance en solo", subtitle: "Navee arrive en France avec la trottinette électrique Navee V50, une proposition de choix dans le segment du milieu de gamme." },
          { link: 'https://www.presse-citron.net/les-velos-electriques-du-futur-ressembleront-a-des-voitures-hybrides/', image: futurv , title: "Les vélos électriques du futur ressembleront à des voitures hybrides", subtitle: "Avec ce Orbit Drive inspiré des voitures hybrides les vélo électriques délivreront des sensations inédites, tout en tirant l’autonomie dans ses retranchements." },
        ]}
        currentIndex={currentIndex}
        handlePrev={() => setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides)}
        handleNext={() => setCurrentIndex((currentIndex + 1) % totalSlides)}
        style={couleurSlider1}
        totalSlides={totalSlides}/>
      </section>
      <Titre texte="NEWS MOBILITÉ URBAINE :"/>
      <section className="slider-container">
        <Slider
          items={[
          { link: 'https://www.presse-citron.net/les-velos-electriques-du-futur-ressembleront-a-des-voitures-hybrides/', image: futurv , title: "Les vélos électriques du futur ressembleront à des voitures hybrides", subtitle: "Avec ce Orbit Drive inspiré des voitures hybrides les vélo électriques délivreront des sensations inédites, tout en tirant l’autonomie dans ses retranchements." },
          { link: 'https://www.presse-citron.net/pass-navigo-pourquoi-les-fonctionnaires-paieront-moins-cher/', image: metro, title: "Pass Navigo : pourquoi les fonctionnaires paieront moins cher ?", subtitle: "Une bonne nouvelle pour les concernés en cette période de forte inflation.<" },
          { link: 'https://www.presse-citron.net/uber-pourquoi-y-a-t-il-des-ecarts-de-prix-pour-une-meme-course/', image: uber, title: "Uber : pourquoi y a-t-il des écarts de prix pour une même course ?", subtitle: "Non, nous ne sommes pas tous égaux face à Uber." },
          { link: 'https://www.presse-citron.net/vous-pourrez-bientot-prendre-le-metro-avec-votre-carte-bancaire-comment-ca-marche/', image: cb, title: "Vous pourrez bientôt prendre le métro avec votre carte bancaire : comment ça marche", subtitle: "Fini le ticket de métro perdu dans le fond de la poche. Fini aussi le Pass Navigo. Bientôt, vous pourrez prendre le métro en posant votre carte bancaire sur le portique" },
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

export default Mobilite;
