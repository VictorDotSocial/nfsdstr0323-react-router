import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogPage = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    // 1. Contactar con NUESTRA API y pasarle la info de la compra (productos, importes...)
    // 2. Nuestra API procesa la compra (la registra en BBDD) y llama a la pasarela de pagos para hacer el cobro. Cuando recibe OK de la pasarela, devuelve OK al front
    // 3. Cuando el front recibe OK de la API, hace el navigate a la página de confirmación y le pinta la info que la API ha devuelto.

    navigate('/blog/confirmation', {
      state: { products: 'Leche, arroz, naranjas', amount: 20.5 },
    });
  };

  return (
    <div>
      <h1>Blog Page</h1>
      <p>Bienvenido a la sección de mi Blog</p>
      <div onClick={handleButton}>Navegar a otra ruta</div>
    </div>
  );
};

export default BlogPage;
