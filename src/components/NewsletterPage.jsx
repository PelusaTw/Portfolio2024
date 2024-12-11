import { useState } from 'react';
import './NewsletterPage.css';

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe() {
    setSubscribed(true);
  }

  return (
    <div className="newsletter-page">
      <div className="newsletter-content">
        <h2>¡Suscríbete a nuestro boletín!</h2>
        <p>Recibe las últimas noticias y actualizaciones directamente en tu bandeja de entrada.</p>
        
        {!subscribed ? (
          <div className="subscription-form">
            <input
              type="email"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button onClick={handleSubscribe}>Suscribirse</button>
          </div>
        ) : (
          <p className="subscribed-message">¡Gracias por suscribirte! Recibirás nuestro boletín pronto.</p>
        )}
      </div>
    </div>
  );
}
