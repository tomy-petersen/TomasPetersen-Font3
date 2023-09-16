import { useAppContext } from '../Components/utils/global.context';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { state, dispatch } = useAppContext();

  const changeTheme = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };

  const navbarStyle = {
    backgroundColor: state.theme === 'claro' ? 'dark' : 'claro',
    color: state.theme === 'claro' ? 'dark' : 'claro',
    display: 'flex',
    justifyContent: 'space-between', // Espacio entre elementos
    alignItems: 'center', // Centrar elementos verticalmente
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Sombra suave
  };

  const navListStyle = {
    listStyle: 'none', // Elimina los puntos de la lista
    display: 'flex',
    gap: '20px',
  };

  const navListItemStyle = {
    margin: '0',
  };

  return (
    <nav style={navbarStyle}>
      <ul style={navListStyle}>
        <li style={navListItemStyle}><Link to="/">Home</Link></li>
        <li style={navListItemStyle}><Link to="/contacto">Contacto</Link></li>
        <li style={navListItemStyle}><Link to="/favs">Favoritos</Link></li>
      </ul>
      <button onClick={changeTheme} className="theme-button">
        Cambiar Tema
      </button>
    </nav>
  );
};

export default Navbar;