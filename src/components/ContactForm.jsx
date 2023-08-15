import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Por favor, ingresa tu nombre ";
    }

    if (!formData.email) {
      newErrors.email = "Por favor, ingresa un email válido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Por favor, ingresa un correo electrónico válido.";
    }
    if (!formData.message) {
      newErrors.message = "Por favor, ingresa un mensaje.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Aquí puedes manejar el envío del formulario, como una llamada a la API.
      console.log("Formulario válido. Enviando datos:", formData);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`mt-1 p-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded w-full`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">
            Correo Electrónico
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`mt-1 p-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded w-full`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">
            Mensaje
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className={`mt-1 p-2 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded w-full`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-picton-blue hover:bg-cerulean text-white font-medium py-2 px-4 rounded"
        >
          Enviar
        </button>
      </form>
    </>
  );
};

export default ContactForm;
