import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (formData.fullName.length < 6 || !formData.email.match(/^\S+@\S+\.\S+$/)) {
      setError("Por favor, verifique su información nuevamente.");
      setSuccessMessage("");
    } else {
      // Aquí puedes implementar la lógica para enviar el formulario
      // Por ejemplo, puedes enviar los datos al servidor o realizar otras acciones necesarias
      // Luego, muestra un mensaje de éxito
      setError("");
      setSuccessMessage(`Gracias ${formData.fullName}, te contactaremos lo antes posible vía email.`);
      // Limpia el formulario
      setFormData({
        fullName: "",
        email: "",
      });
    }
  };

  return (
    <div>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Nombre Completo:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};

export default Form;

