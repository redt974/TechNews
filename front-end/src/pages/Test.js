import React, { useState } from 'react';
import Slider from "../components/slider";
import Header from "../components/header";
import Info_top from "../components/info-top";
import Titre from '../components/titre';
import Footer from "../components/footer";
import CookiePopup from "../components/cookies";

import mw3 from "../Assets/mw3.jpg";

import iphone from "../Assets/review-iphone.jpg";
import mario from "../Assets/mario.jpg";
import pixel_watch from "../Assets/pixel watch.jpg";
import fairphone from "../Assets/fairphone.jpg";
import visionpro from "../Assets/visionpro.jpg";
import s9 from "../Assets/s9tab.jpg";
import bspro from "../Assets/BSPRO.jpeg";
import logitech from "../Assets/LogitechPro.jpg";
import dyson from "../Assets/Dyson.jpg";
import bugsnax from "../Assets/bugsnax.jpg";
import dirt5 from "../Assets/Dirt5.jpg";
import ride4 from "../Assets/Ride4.jpg";

function Test() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const couleurSlider1 = { background: 'linear-gradient(180deg, rgb(71, 187, 255), rgb(12, 24, 94))' };
  const couleurSlider2 = { background: 'linear-gradient(180deg, rgb(255, 148, 27), rgb(207, 0, 0))' };
  const couleurSlider3 = { background: 'linear-gradient(180deg, rgb(255, 165, 180), rgb(66, 0, 66))' };
  const couleurSlider4 = { background: 'linear-gradient(180deg, rgb(100, 239, 14), rgb(0, 46, 0))' };
  const totalSlides = 2;
  return (
    <div className="Test">
    <Header></Header>
    <section id="page">
      <Info_top image={mw3} lien="https://www.presse-citron.net/test-call-of-duty-modern-warfare-3-fuyez-pauvres-fous/" titre="Test Call Of Duty Modern Warfare 3 : Faut-il débourser 70€ pour un DLC ?"/>
      <Titre texte="TEST DE CETTE SEMAINE :"/>
      <section className="slider-container">
        <Slider
          items={[
          { link: 'https://www.presse-citron.net/test-iphone-15-pro/', image: iphone, title: "Test de l'iPhone 15 Pro", subtitle: "Voilà plus d’un mois maintenant que nous utilisons l’iPhone 15 Pro au quotidien. Découvrez notre test complet." },
          { link: 'https://www.presse-citron.net/test-super-mario-bros-wonder/', image: mario, title: "Test Super Mario Bros. Wonder : le jeu en 2D que tous les fans méritaient", subtitle: "Avec Super Mario Bros. Wonder, Nintendo propose enfin un épisode qui fait renaître l’intérêt des opus en 2D." },
          { link: 'https://www.presse-citron.net/jai-remplace-mon-apple-watch-par-la-google-pixel-watch-2-et-cetait-bien/', image: pixel_watch, title: "J’ai remplacé mon Apple Watch par la Google Pixel Watch 2 (et c’était bien)", subtitle: "Fidèle utilisateur de l’Apple Watch, je l’ai remplacée pendant un mois par la Pixel Watch 2, dernière montre connectée signée Google." },
          { link: 'https://www.presse-citron.net/fairbuds-xl-voici-le-casque-ecolo-de-fairphone/', image: fairphone, title: "Fairbuds XL : voici le casque écolo de Fairphone", subtitle: "Fairphone élargit son catalogue : son premier casque fabriqué avec du matériel recyclé et facilement réparable est là." },
        ]}
        currentIndex={currentIndex}
        handlePrev={() => setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides)}
        handleNext={() => setCurrentIndex((currentIndex + 1) % totalSlides)}
        style={couleurSlider1}
        totalSlides={totalSlides}/>
      </section>
      <Titre texte="TEST TECH :"/>
      <section className="slider-container">
        <Slider
          items={[
          { link: 'https://www.presse-citron.net/test-iphone-15-pro/', image: iphone, title: "Test de l'iPhone 15 Pro", subtitle: "Voilà plus d’un mois maintenant que nous utilisons l’iPhone 15 Pro au quotidien. Découvrez notre test complet." },
          { link: 'https://www.presse-citron.net/combien-faudra-t-il-payer-au-minimum-pour-avoir-un-casque-apple-vision/', image: visionpro, title: "Combien faudra-t-il payer, au minimum, pour avoir un casque Apple Vision ?", subtitle: "Après avoir sorti le Vision Pro, Apple devrait lancer un casque plus abordable, qui pourrait être appelé Apple Vision. De nouvelles informations sur son prix et ses caractéristiques circulent sur la toile." },
          { link: 'https://www.presse-citron.net/jai-remplace-mon-apple-watch-par-la-google-pixel-watch-2-et-cetait-bien/', image: pixel_watch, title: "J’ai remplacé mon Apple Watch par la Google Pixel Watch 2 (et c’était bien)", subtitle: "Fidèle utilisateur de l’Apple Watch, je l’ai remplacée pendant un mois par la Pixel Watch 2, dernière montre connectée signée Google." },
          { link: 'https://www.presse-citron.net/test-samsung-galaxy-tab-s9/', image: s9, title: "Test Galaxy Tab S9 : l’irréductible tablette de Samsung qui défie l’iPad Air", subtitle: "Modèle le plus abordable de la nouvelle cuvée de tablettes premium Samsung, la Galaxy Tab S9 ambitionne d’être une alternative crédible à l’iPad Air d’Apple (2022). Possède-t-elle assez de qualités et de nouveautés pour y parvenir" },
        ]}
        currentIndex={currentIndex}
        handlePrev={() => setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides)}
        handleNext={() => setCurrentIndex((currentIndex + 1) % totalSlides)}
        style={couleurSlider2}
        totalSlides={totalSlides}/>
      </section>
      <Titre texte="TEST AUDIO :"/>
      <section className="slider-container">
        <Slider
          items={[
          { link: 'https://www.presse-citron.net/test-beats-studio-pro-le-come-back-dun-casque-iconique/', image: bspro, title: "Test Beats Studio Pro : le come back d’un casque iconique ?", subtitle: "Après 4 ans d’absence, la plus célèbre filiale d’Apple est de retour aux affaires avec le Studio Pro. Un casque haut de gamme, plutôt atypique, ayant l’ambition de venir titiller Bose, Sony et Sennheiser. Beats est-il capable de revenir d’entre les morts ?" },
          { link: 'https://www.presse-citron.net/test-logitech-pro-x-2-lightspeed/', image: logitech, title: "On a testé le Logitech Pro X 2 Lightspeed, le casque gaming des joueurs pro", subtitle: "Logitech lance le G Pro X 2 Lightspeed, une nouvelle version de son casque gaming le plus célèbre. Un modèle utilisé par les pros de l’e-sport. Nous l’avons testé pendant quelques jours." },
          { link: 'https://www.presse-citron.net/test-dyson-zone-casque/', image: dyson, title: "Test du casque Dyson : alors le Zone, ça dit quoi ?", subtitle: "Dyson s’attaque à l’audio avec son tout premier casque : le Dyson Zone. Mais Dyson ne fait jamais comme tout le monde, et ajoute un purificateur d’air individuel. Que vaut réellement l’extravagant Dyson Zone ?" },
          { link: 'https://www.presse-citron.net/fairbuds-xl-voici-le-casque-ecolo-de-fairphone/', image: fairphone, title: "Fairbuds XL : voici le casque écolo de Fairphone", subtitle: "Fairphone élargit son catalogue : son premier casque fabriqué avec du matériel recyclé et facilement réparable est là." },
        ]}
        currentIndex={currentIndex}
        handlePrev={() => setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides)}
        handleNext={() => setCurrentIndex((currentIndex + 1) % totalSlides)}
        style={couleurSlider3}
        totalSlides={totalSlides}/>
      </section>
      <Titre texte="TEST JEUX VIDEOS :"/>
      <section className="slider-container">
        <Slider
          items={[
          { link: 'https://www.presse-citron.net/decouvrez-notre-test-de-bugsnax-le-premier-jeu-decale-de-cette-next-gen/', image: bugsnax, title: "Découvrez notre test de Bugsnax, le premier jeu décalé de cette next-gen", subtitle: "Découvrez dès maintenant notre test de Bugsnax, l’un des premiers jeux complètement décalés pour le lancement de cette nouvelle génération sur PS5 et PC !" },
          { link: 'https://www.presse-citron.net/test-dirt-5-xbox-series-x-ps5/', image: dirt5, title: "Test DiRT 5 Xbox Series X : le premier jeu de course “next-gen” ?", subtitle: "C’est l’un des premiers jeux Xbox Series X à avoir été montré, DiRT 5 est largement meilleur que ce que vous pensez, mais il n’est pas inoubliable pour autant. Explications." },
          { link: 'https://www.presse-citron.net/test-de-ride-4-le-premier-bon-jeu-de-motos-sur-ps5-et-xbox-series-x/', image: ride4, title: "Test de Ride 4 – Le premier bon jeu de motos sur PS5 et Xbox Series X ?", subtitle: "Milestone est de retour avec Ride 4, sa dernière expérience de jeux de motos sur consoles avec une amélioration sur PS5 et Xbox Series X. Est-ce le premier bon jeu de moto next-gen ?" },
          { link: 'https://www.presse-citron.net/test-super-mario-bros-wonder/', image: mario, title: "Test Super Mario Bros. Wonder : le jeu en 2D que tous les fans méritaient", subtitle: "Avec Super Mario Bros. Wonder, Nintendo propose enfin un épisode qui fait renaître l’intérêt des opus en 2D." },
        ]}
        currentIndex={currentIndex}
        handlePrev={() => setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides)}
        handleNext={() => setCurrentIndex((currentIndex + 1) % totalSlides)}
        style={couleurSlider4}
        totalSlides={totalSlides}/>
      </section>
    </section>
    <Footer></Footer>
    <CookiePopup/>
    </div>
  );
}

export default Test;
