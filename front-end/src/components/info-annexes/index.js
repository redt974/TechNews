import "./index.css";

function Info_annexes ({Link, image, titre, texte }) {
    return (
        <div className="block-information" >
            <a className="information" href={Link} target="_blank">
                <img className="image-annexes" src={image} alt="Champs-élysées"/>
                <div className="block-texte">
                    <p className="texte-annexes">{titre}</p>
                    <p className="sous-texte-annexes">{texte}</p>
                </div>
            </a>
        </div>          
    )
}

export default Info_annexes;