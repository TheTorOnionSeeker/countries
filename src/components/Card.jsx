import React from 'react'

export default function Card({ name, capital, onClose }) {
  let handleClick=(name)=>{
    onClose(name);
  }
  return (
    <>
      <div>
        <h1>Nombre: {name}</h1>
        <h2>Capital: {capital}</h2>
      </div>
      <button onClick={()=>handleClick(name)}>X</button>
    </>
  )
}
