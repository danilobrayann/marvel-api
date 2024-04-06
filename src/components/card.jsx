import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function  Card({ data }) {
  let navigate = useNavigate();

  // Verificar si data es un array y si tiene elementos
  if (!Array.isArray(data) || data.length === 0) {
    return null; // Si data no es un array o está vacío, no renderizar nada
  }

  return (
    <>
      {data.map(item => (
        <div className="card" key={item.id} onClick={() => navigate(`/${item.id}`)}>
          <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
          <div className="title">
            <h3>{item.name}</h3>
          </div>
        </div>
      ))}
    </>
  )
}
