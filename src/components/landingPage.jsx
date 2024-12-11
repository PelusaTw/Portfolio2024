import './LandingPage.css';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="content">
      <img src="/images/juan.png" alt="Foto" className="profile-img" />
        <h1>Bienvenidos a mi <span>portafolio</span></h1>
        <p>Soy un profesional dedicado al desarrollo full stack con tecnologías como:</p>
        <div className="technologies">
          <img src="./images/html-logo.png" alt="HTML" />
          <img src="./images/css-logo.png" alt="CSS" />
          <img src="./images/js-logo.png" alt="JavaScript" />
          <img src="./images/react-logo.png" alt="React" />
          <img src="./images/laravel-logo.png" alt="Laravel" />
        </div>
        <Link to="/contact" className="contact-btn">Contáctame</Link>
      </div>
    </div>
  );
}
