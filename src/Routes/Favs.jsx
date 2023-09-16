import React, { useContext, useState, useEffect } from 'react';
import Card from '../Components/Card';
import { ContextGlobal, useAppContext } from '../Components/utils/global.context';

const Favs = () => {
  const { theme } = useContext(ContextGlobal);
  const { state, removeFromFavorites } = useAppContext(); 
  const dentistas = state.dataFavorites;

  const themeClass = theme === 'dark' ? 'dark-theme' : 'light-theme';

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="fav">
      <h1>Dentists Favs</h1>
      <div className={`cartas${state.theme}`}>
  {dentistas.length > 0 ? (
    dentistas.map((dentista) => (
      <Card
        key={dentista.id}
        name={dentista.name}
        username={dentista.username}
        id={dentista.id}
      />
    ))
  ) : (
    <h2>No hay odontólogos en la lista de favoritos</h2>
  )}
</div>
    </div>
  );
};

export default Favs;

