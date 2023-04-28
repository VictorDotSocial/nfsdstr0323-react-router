import React from 'react'
import { useLocation } from 'react-router-dom'

const ConfirmationPage = () => {
  const { state } = useLocation();
  const { products, amount } = state;

  return (
    <div>
      <h1>Página de Confirmación</h1>
      <p>Has comprado: {products}</p>
      <p>El coste total es de: {amount}</p>
    </div>
  )
}

export default ConfirmationPage