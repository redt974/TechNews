import "../styles/style-error.css";
import { Link } from 'react-router-dom';
import Header from "../components/header";
import Footer from "../components/footer";

function Error() {
  return (
    <div className="Error body_font">
    <Header></Header>
    <div className="error-container">
      <h1 className="error">Error 404 NOT FOUND</h1>
      <p className="error">The page you are looking for could not be found.</p>
      <Link className="error" to="/"><p className="error return"> Back to the homepage</p></Link>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default Error;
