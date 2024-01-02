import "./index.css";

const ContentItem = ({ link, image, title, subtitle, couleur }) => {
  return (
    <div className="content" style={couleur}>
      <a href={link} target="_blank">
        <img className="image-annonce" src={image} alt={title} />
        <h2 className="texte-slider">{title}</h2>
        <p className="sous-texte-slider">{subtitle}</p>
      </a>
    </div>
  );
};

  
export default ContentItem;