import './App.css';

import React, { useEffect, useState } from 'react'
import CharacterContainer from './Components/charactersContainer'

export default function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character') 
      .then(response =>  response.json())
      .then(({results}) => setCharacters(results))
  }, [])


  const deleteCharacter = (characterD) => {
    const newCharacters = characters.filter(character => character.id !== characterD.id)
    setCharacters(newCharacters)
  }

  return (
    <div className="App">
      <CharacterContainer 
        key="characters" 
        characters={characters} 
        deleteCharacter={deleteCharacter}
      />
    </div>
  )
}


