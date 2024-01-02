import React, { useState } from 'react';
import Slider from "../components/slider";
import Header from "../components/header";
import Info_top from "../components/info-top";
import Titre from '../components/titre';
import Footer from "../components/footer";
import CookiePopup from "../components/cookies";

import science from "../Assets/sciencet.jpg";

import canicule from "../Assets/canicule.jpg";
import implant from "../Assets/implant.jpg";
import ecrans from "../Assets/ecrans.jpg";
import nasa from "../Assets/canicule.jpg";
import frigo from "../Assets/frigo.jpg";
import alimentaire from "../Assets/alimentaire.jpg";
import cancer from "../Assets/cancer.jpg";

function Science() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const couleurSlider1 = { background: 'linear-gradient(180deg, rgb(100, 239, 14), rgb(0, 46, 0))' };
  const totalSlides = 2;

  return (
    <div className="Science">
    <Header></Header>
    <section id="page">
    <Info_top image={science} lien="https://www.presse-citron.net/cratere-scene-de-chaos-7-images-effrayantes-des-degats-de-starship/" titre="              Cratère, scène de chaos : 7 images effrayantes des dégâts de Starship"/>
    <Titre texte="NEWS DE CETTE SEMAINE :"/>
    <section className="slider-container">
        <Slider
          items={[
          { link: 'https://www.presse-citron.net/en-2050-lune-des-premieres-causes-de-mortalite-sera-la-canicule/', image: canicule , title: "En 2050 l’une des premières causes de mortalité sera la canicule", subtitle: "Le nouveau rapport du consortium “The Lancet” sur le climat est pessimiste. Les canicules devraient devenir meurtrière." },
          { link: 'https://www.presse-citron.net/innovation-ou-intrusion-les-impacts-insoupconnes-des-implants-cerebraux-a-la-sauce-elon-musk/', image: implant , title: "Innovation ou intrusion ? Les impacts insoupçonnés des implants cérébraux à la sauce Elon Musk", subtitle: "Les implants cérébraux sont-ils vraiment sans danger pour l’être humain ?" },
          { link: 'https://www.presse-citron.net/vous-pensez-que-vous-couper-des-ecrans-vous-fait-du-bien-vous-vous-trompez/', image: ecrans, title: "Vous pensez que vous couper des écrans vous fait du bien ? Vous vous trompez ", subtitle: "Ces pratiques ne sont pas aussi bénéfiques qu’on ne le pensait." },
          { link: 'https://www.presse-citron.net/un-an-apres-la-nasa-est-toujours-surprise-par-les-resultats-de-cette-mission/', image: nasa, title: "Un an après la NASA est toujours surprise par les résultats de cette mission", subtitle: "Alors que la mission DART a atteint son but final en septembre 2022, les résultats de cette dernière intriguent toujours la NASA." },
        ]}
        currentIndex={currentIndex}
        handlePrev={() => setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides)}
        handleNext={() => setCurrentIndex((currentIndex + 1) % totalSlides)}
        style={couleurSlider1}
        totalSlides={totalSlides}/>
      </section>
      <Titre texte="NEWS SCIENCE :"/>
      <section className="slider-container">
        <Slider
          items={[
          { link: 'https://www.presse-citron.net/en-2050-lune-des-premieres-causestarget=_blank>-de-mortalite-sera-la-canicule/', image: canicule, title: "En 2050 l’une des premières causes de mortalité sera la canicule", subtitle: "Le nouveau rapport du consortium “The Lancet” sur le climat est pessimiste. Les canicules devraient devenir meurtrière." },
          { link: 'https://www.presse-citron.net/votre-frigo-est-probablement-mal-regle-cette-etude-sonne-lalarme/', image: frigo, title: "Votre frigo est probablement mal réglé : cette étude sonne l’alarme !", subtitle: "Des chercheurs dressent un constat inquiétant et donnent des conseils essentiels." },
          { link: 'https://www.presse-citron.net/sante-climat-ces-changements-dalimentation-peuvent-sauver-le-monde/', image: alimentaire, title: "Santé, climat : ces changements d’alimentation peuvent sauver le monde", subtitle: "Des chercheurs ont repéré que si nous changions juste un peu nos régimes alimentaires, nous serions en meilleure santé et émettrions beaucoup moins de carbone." },
          { link: 'https://www.presse-citron.net/comment-un-garcon-de-14-ans-a-t-il-developpe-un-savon-anti-cancer/', image: cancer, title: "Comment un garçon de 14 ans a-t-il développé un savon anti-cancer ?", subtitle: "À 14 ans Heman Beleke, jeune collégien américain vient de remporter le prestigieux concours 3M Young Scientist Challenge, pour cause il a inventé un savon qui combat le cancer de la peau." },
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

export default Science;
