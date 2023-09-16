import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { theme, getDentistById } = useContext(ContextGlobal);
  const themeClass = theme ==='claro' ? 'dark' : 'claro';

  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  const url = "https://jsonplaceholder.typicode.com/users/" + id;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDentist(data));
  }, []);
  return (
    <div className={`detail-container ${themeClass}`}>
      {dentist ? (
        <>
          <h1>Detail Dentist {dentist.id}</h1>
          <p>Name: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;


