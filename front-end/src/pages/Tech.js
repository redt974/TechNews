import React, { useState } from 'react';
import Slider from "../components/slider";
import Header from "../components/header";
import Info_top from "../components/info-top";
import Titre from '../components/titre';
import Footer from "../components/footer";
import CookiePopup from "../components/cookies";

import bods from "../Assets/huaweibuds.jpg";

import iphone from "../Assets/review-iphone.jpg" ;
import pins from "../Assets/pins.jpg";
import pixel_watch from "../Assets/pixel watch.jpg";
import fairphone from "../Assets/fairphone.jpg";
import visionpro from "../Assets/visionpro.jpg";
import s9 from "../Assets/s9tab.jpg";

function Tech() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const couleurSlider1 = { background: 'linear-gradient(180deg, rgb(71, 187, 255), rgb(12, 24, 94))' };
  const totalSlides = 2;

  return (
    <div className="Tech">
    <Header></Header>
    <section id="page">
      <Info_top image={bods} lien="https://www.presse-citron.net/test-huawei-freebuds-pro-3/" titre="Test Huawei FreeBuds Pro 3 : des écouteurs sans fil injustement sous-côtés"/>
      <Titre texte="NEWS TECH DE LA SEMAINE :"/>
      <section className="slider-container">
        <Slider
          items={[
          { link: 'https://www.presse-citron.net/test-iphone-15-pro/', image: iphone, title: "Tap to pay sur iPhone débarque en France : comment Apple va changer votre façon de payer vos achats (4 questions)", subtitle: "Apple annonce le déploiement de Tap to Pay sur iPhone et révolutionne le paiement en boutique. Tout comprendre sur ce que ça va changer pour vous en 4 questions." },
          { link: 'https://www.presse-citron.net/ce-pins-a-699-dollars-permet-de-communiquer-avec-chatgpt/', image: pins , title: "Ce pins à 699 dollars promet de ranger votre smartphone dans un tiroir", subtitle: "L’appareil évoque un peu les badges communicateurs de Star Trek. Son usage ressemble à celui d’un smartphone sans écran. Il s’accompagne d’un abonnement obligatoire à 24 dollars par mois." },
          { link: 'https://www.presse-citron.net/jai-remplace-mon-apple-watch-par-la-google-pixel-watch-2-et-cetait-bien/', image: pixel_watch , title: "J’ai remplacé mon Apple Watch par la Google Pixel Watch 2 (et c’était bien)", subtitle: "Fidèle utilisateur de l’Apple Watch, je l’ai remplacée pendant un mois par la Pixel Watch 2, dernière montre connectée signée Google." },
          { link: 'https://www.presse-citron.net/fairbuds-xl-voici-le-casque-ecolo-de-fairphone/', image: fairphone, title: "Fairbuds XL : voici le casque écolo de Fairphone", subtitle: "Fairphone élargit son catalogue : son premier casque fabriqué avec du matériel recyclé et facilement réparable est là." },
        ]}
        currentIndex={currentIndex}
        handlePrev={() => setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides)}
        handleNext={() => setCurrentIndex((currentIndex + 1) % totalSlides)}
        style={couleurSlider1}
        totalSlides={totalSlides}/>
      </section>
      <Titre texte="NEWS TECH :"/>
      <section className="slider-container">
        <Slider
          items={[
          { link: 'https://www.presse-citron.net/test-iphone-15-pro/', image: iphone, title: "Tap to pay sur iPhone débarque en France : comment Apple va changer votre façon de payer vos achats (4 questions)", subtitle: "Apple annonce le déploiement de Tap to Pay sur iPhone et révolutionne le paiement en boutique. Tout comprendre sur ce que ça va changer pour vous en 4 questions." },
          { link: 'https://www.presse-citron.net/combien-faudra-t-il-payer-au-minimum-pour-avoir-un-casque-apple-vision/', image: visionpro, title: "Combien faudra-t-il payer, au minimum, pour avoir un casque Apple Vision ?", subtitle: "Après avoir sorti le Vision Pro, Apple devrait lancer un casque plus abordable, qui pourrait être appelé Apple Vision. De nouvelles informations sur son prix et ses caractéristiques circulent sur la toile." },
          { link: 'https://www.presse-citron.net/jai-remplace-mon-apple-watch-par-la-google-pixel-watch-2-et-cetait-bien/', image: pixel_watch , title: "J’ai remplacé mon Apple Watch par la Google Pixel Watch 2 (et c’était bien)", subtitle: "Fidèle utilisateur de l’Apple Watch, je l’ai remplacée pendant un mois par la Pixel Watch 2, dernière montre connectée signée Google." },
          { link: 'https://www.presse-citron.net/test-samsung-galaxy-tab-s9/', image: s9, title: "Test Galaxy Tab S9 : l’irréductible tablette de Samsung qui défie l’iPad Air", subtitle: "Modèle le plus abordable de la nouvelle cuvée de tablettes premium Samsung, la Galaxy Tab S9 ambitionne d’être une alternative crédible à l’iPad Air d’Apple (2022). Possède-t-elle assez de qualités et de nouveautés pour y parvenir" },
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

export default Tech;
