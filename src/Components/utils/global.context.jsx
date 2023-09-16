import React, { createContext, useReducer, useContext, useEffect } from 'react';

const initialState = {
  theme: 'claro',
  data: null,
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  dataFavorites: [],
};

export const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return { ...state, theme: state.theme === 'claro' ? 'dark' : 'claro' };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SET_DATA_FAVORITES':
      return { ...state, dataFavorites: action.payload };
    case 'ADD_TO_FAVORITES':
      if (!state.favorites.includes(action.payload)) {
        const updatedFavoritesAdd = [...state.favorites, action.payload];
        localStorage.setItem('favorites', JSON.stringify(updatedFavoritesAdd));
        
        const updatedDataFavoritesAdd = [...state.dataFavorites, action.payload];
        return { ...state, favorites: updatedFavoritesAdd, dataFavorites: updatedDataFavoritesAdd };
      }
      return state;
    case 'REMOVE_FROM_FAVORITES':
      const updatedFavoritesRemove = state.favorites.filter((item) => item !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(updatedFavoritesRemove));
      
      const updatedDataFavoritesRemove = state.dataFavorites.filter((item) => item.id !== action.payload);
      return { ...state, favorites: updatedFavoritesRemove, dataFavorites: updatedDataFavoritesRemove };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites && storedFavorites.length > 0) {
      dispatch({ type: 'SET_DATA', payload: storedFavorites });
    }
  }, []);

  const obtenerDentistaPorId = async () => {
    try {
      const favorites = state.favorites;
      const dataFavorites = [];

      for (const id of favorites) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
        if (!response.ok) {
          throw new Error('No se pudo obtener la información del dentista');
        }
        const userData = await response.json();
        dataFavorites.push(userData);
        
        console.log('ID de dentista obtenido:', id);
        console.log('Datos de dentista obtenidos:', userData);
      }

      dispatch({ type: 'SET_DATA_FAVORITES', payload: dataFavorites });
    } catch (error) {
      console.error('Error al obtener datos de favoritos de la API:', error);
    }
  };

  return (
    <ContextGlobal.Provider value={{ state, dispatch, obtenerDentistaPorId }}>
      {children}
    </ContextGlobal.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(ContextGlobal);
  if (!context) {
    throw new Error('useAppContext debe ser utilizado dentro de ContextProvider');
  }
  return context;
};

export { ContextProvider, useAppContext };
