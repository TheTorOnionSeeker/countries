import React from 'react'

export default function SearchBar({onSearch}) {

  let handleChange=(value)=>{
    /* value.preventDefault(); */
    onSearch(value);
  }

  return (
    <>
    <div>
      <input onChange={(e)=>handleChange(e.target.value)} ></input>
    </div>
    </>
  )
}
