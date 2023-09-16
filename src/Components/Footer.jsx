import React, { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context'; // Asegúrate de proporcionar la ruta correcta al archivo global.context.jsx

const Footer = () => {
  const { state } = useContext(ContextGlobal); // Obtiene el estado actual del contexto

  // Define estilos para temas claros y oscuros
  const estilosClaro = {
    background: 'white',
    color: 'black',
  };

  const estilosOscuro = {
    background: 'black',
    color: 'white',
  };

  // Aplica los estilos correspondientes al tema actual
  const estilos = state.theme === 'light' ? estilosClaro : estilosOscuro;

  // Agrega un console.log para verificar el tema
  console.log('Tema actual:', state.theme);

  return (
    <footer style={estilos}>
      <p>Powered by</p>
      <img src="/images/Tommy Petersen.jpg" alt='DH-logo' />
    </footer>
  );
};

export default Footer;



