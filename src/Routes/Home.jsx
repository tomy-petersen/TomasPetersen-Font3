import React, { Component } from "react";
import Card from '../Components/Card'; // Asegúrate de importar el componente Card correctamente

class Home extends Component {
  state = {
    people: [
      {
        id: 1,
        name: "John Doe",
        username: "johndoe123",
        isFavorite: false,
      },
      {
        id: 2,
        name: "Jane Smith",
        username: "janesmith456",
        isFavorite: false,
      },
      {
        id: 3,
        name: "Bob Johnson",
        username: "bobjohnson789",
        isFavorite: false,
      },
    ],
  };

  handleFavorite = (id) => {
    // Copia el array de personas y actualiza el estado para marcar/desmarcar como favorito según la ID.
    const updatedPeople = this.state.people.map((person) => {
      if (person.id === id) {
        return { ...person, isFavorite: !person.isFavorite };
      } else {
        return person;
      }
    });

    // Actualiza el estado con la nueva lista de personas.
    this.setState({ people: updatedPeople });
  };

  render() {
    const { people } = this.state;

    return (
      <div className="${state.theme}">
        <h1>Lista de Odontologos</h1>
        <div className="card-container">
          {people.map((person) => (
            <Card
              key={person.id}
              id={person.id}
              name={person.name}
              username={person.username}
              isFavorite={person.isFavorite}
              addFav={this.handleFavorite}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;











