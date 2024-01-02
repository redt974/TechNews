import "./index.css";

function Info_top({ image,lien, titre }) {  
    const contentStyle = {
      backgroundImage: `url(${image})`,
    };
  
    return (
      <div id="top">
        <div className="content1" style={contentStyle}>
          <a href={lien} target="_blank" rel="noopener noreferrer">
            <p id="titre">{titre}</p>
          </a>
        </div>
      </div>
    );
  }
  
  export default Info_top;
