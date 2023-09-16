import React, { useContext, useState } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';



const Contact = () => {
  const { theme } = useContext(ContextGlobal); // Obtén el tema del contexto
  const themeClass = theme === 'dark' ? 'dark-theme' : 'light-theme';

  // Estados para los campos del formulario y mensajes
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Función para manejar el envío del formulario simulado
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Realiza validaciones de campos (ajusta según tus requisitos)
    if (name.length < 5 || !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setErrorMessage('Por favor, verifica tu información nuevamente');
    } else {
      try {
        // Simula el envío del formulario al servidor
        // En este ejemplo, simplemente esperamos 2 segundos para simular una respuesta exitosa
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Muestra el mensaje de agradecimiento después del envío exitoso
        setSuccessMessage(`¡Gracias ${name}, te contactaremos lo antes posible vía email!`);
        setName('');
        setEmail('');
        setErrorMessage('');
      } catch (error) {
        console.error(error);
        setErrorMessage('Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo.');
      }
    }
  };

  return (
    <div className={`contact-container ${themeClass}`}>
      <h2>¿Tienes alguna Duda?</h2>
      <p>Ponte en contacto con nosotros</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre completo:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default Contact;




