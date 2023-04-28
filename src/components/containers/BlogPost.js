import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams(); // Recibiendo los parámetros del slug

  return (
    <>
        <h1>Blog Post</h1>
        <p>Estás visitando el post del blog</p>
        <p>El slug de la URL es: {slug}</p>
    </>
  )
}

export default BlogPost