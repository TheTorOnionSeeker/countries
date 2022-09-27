import React from 'react'
import Card from './Card';

export default function Cards({ countries, onClose }) {
  return (
    <>
      {
        countries ? countries.map(e => <Card index={e.idd.root} onClose={onClose} name={e.name.common} capital={e.capital[0]} />) : <p>No existe countries</p>
      }
    </>
  )
}
