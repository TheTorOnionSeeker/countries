import React from 'react';
import { useState } from 'react'
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Home from './components/Home';
import Card from './components/Card';

function App() {
  const [searched_countries, setSearchedCountries] = useState([]);
  function onClose(name) {
    setSearchedCountries(oldCountries => oldCountries.filter(c => c.name !== name));
  }
  function onSearch(name) {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((r) => r.json())
      .then((r) => {
        if (r !== undefined) {
          let countriesInfo = {
            name: r[0].name.common,
            capital: r[0].capital[0],
            index: r[0].idd.root
          };
          setSearchedCountries(oldCountries => [...oldCountries, countriesInfo]);
        }
      })
  }

  return (
    <>
      <NavBar />
      <SearchBar onSearch={onSearch} />
      {
        searched_countries ? searched_countries.map((e) => <Card name={e.name} capital={e.capital} index={e.index} onClose={onClose} />) : <p>XXXXXXXXXXXXXXXX</p>
      }
      <Home onClose={onClose} />
    </>
  );
}

export default App;
