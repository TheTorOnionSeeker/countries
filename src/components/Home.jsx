import React, { useState } from 'react'
import Cards from './Cards';
//import Card from './Card'

export default function Home({ onClose }) {

   const [countries, setCountries] = useState([]);

   const reqApi = async () => {
      const api = await fetch('https://restcountries.com/v3.1/all/');
      const apiInnfo = await api.json();
      setCountries(apiInnfo);
      console.log(countries);
   }
   return (
      <>
         <div>
            {/* <Cards countries={countries} onClose={onClose} /> */}
            <div>
               <button onClick={reqApi}>Ver todos los países</button>
            </div>
            {}
         </div>
      </>
   )
}