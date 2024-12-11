import { useState } from 'react';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Mensaje enviado por ${formData.name}`);
    setFormData({ name: '', email: '', message: '' }); 
  }

  return (
    <div className="contact-page">
      <h2>Contáctame</h2>
      <p>¡Estoy disponible para proyectos o consultas! Envíame un mensaje y me pondré en contacto contigo lo antes posible.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
