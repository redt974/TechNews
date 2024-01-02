import "../styles/style-home.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Titre from "../components/titre";
import Info_annexes from "../components/info-annexes";
import CookiePopup from "../components/cookies";

import champs from "../Assets/champs-elysees.jpg";
import bitcoin from "../Assets/bitcoin.jpg";
import chatgpt from "../Assets/chatgpt.jpg";
import sms from "../Assets/sms.jpg";
import voiture from "../Assets/voiture.jpg";


function Home() {
  return (
    <div className="Home">
    <Header></Header>
      <section id="page">
        <div className="part-un">
          <div className="part-right">
            <a href="https://www.presse-citron.net/test-call-of-duty-modern-warfare-3-fuyez-pauvres-fous/" target="_blank">
              <div className="block">
                <p className="titre">
                  Test Call of Duty Modern Warfare 3 : Faut-il débourser 70€ pour un
                  DLC ?
                </p>
                <p className="titre-sous-texte">
                  Comme le veut la tradition, la fin d'année est marquée par la
                  sortie d'un nouveau Call of Duty. Malheureusement, ce Modern
                  Warfare 3 est à oublier.
                </p>
              </div>
            </a>
          </div>
          <div className="part-left">
            <a href="https://www.presse-citron.net/mieux-quau-black-friday-emma-explose-ses-prix-aux-french-days/"  target="_blank">
              <div className="block-un">
                <p className="second-titre">
                  Black Friday : dormer à prix insolent avec les offres Emma
                  (-50%)
                </p>
              </div>
            </a>
            <a href="https://www.presse-citron.net/wework-symbole-dune-economie-qui-marche-sur-la-tete/" target="_blank">
              <div className="block-deux">
                <p className="second-titre">
                  WeWork, symbole d’une économie qui marche sur la tête (Edito)
                </p>
              </div>
            </a>
          </div>
        </div>
        <Titre texte="DERNIÈRES ACTUALITÉS :"/>
        <div className="part-deux">
          <Info_annexes 
            Link="https://www.presse-citron.net/comment-anne-hidalgo-veut-bouter-les-suv-hors-de-paris/"
            image={champs}
            titre="Comment Anne Hidalgo veut bouter les SUV hors de Paris ?"
            texte="Un référendum local sera bientôt organisé à Paris"/>
          <Info_annexes 
            Link="https://www.presse-citron.net/bitcoin-apres-leuphorie-la-douche-froide-avec-une-chute-brutale/"
            image={bitcoin}
            titre="Bitcoin: après l’euphorie, la douche froide avec une chute brutale"
            texte="Le monde des cryptomonnaies n’est pas à la fête au cours de ces dernières 24 heures."/>
          <Info_annexes 
            Link="https://www.presse-citron.net/chatgpt-plus-fait-une-pause-voici-pourquoi-vous-ne-pouvez-plus-vous-inscrire/"
            image={chatgpt}
            titre="ChatGPT Plus fait une pause : voici pourquoi vous ne pouvez plus vous inscrire"
            texte="Victime de son succès, OpenAI doit suspendre les nouvelles inscriptions à son abonnement ChatGPT Plus."/>
          <Info_annexes 
            Link="https://www.presse-citron.net/les-sms-declinent-3-milliards-de-dollars-de-pertes-pour-les-operateurs/"
            image={sms}
            titre="Les SMS déclinent : 3 milliards de dollars de pertes pour les opérateurs"
            texte="Juniper Research prédit une baisse mondiale de l’utilisation des SMS pour la communication des entreprises avec leurs clients. Les opérateurs vont perdre des milliards de dollars."/>
          <Info_annexes 
            Link="https://www.presse-citron.net/pourquoi-le-prix-de-vos-peages-dautoroute-menace-daugmenter/"
            image={voiture}
            titre="Pourquoi le prix de vos péages d’autoroute menace d’augmenter ?"
            texte="Vinci Autoroutes agite la menace d’une nouvelle augmentation du prix de ses péages d’autoroute si une nouvelle taxe n’est pas retirée du projet de Loi des Finances 2024."/>
        </div>
      </section>
    <Footer></Footer>
    <CookiePopup/>
    </div>
  );
}

export default Home;
