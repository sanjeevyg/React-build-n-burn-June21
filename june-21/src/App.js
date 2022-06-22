import './App.css';

import React, { useEffect, useState } from 'react'
import CharacterContainer from './Components/charactersContainer'
import Filter from './Components/filter';

export default function App() {

  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState('')

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character') 
      .then(response =>  response.json())
      .then(({results}) => setCharacters(results))
  }, [])


  const deleteCharacter = (characterD) => {
    const newCharacters = characters.filter(character => character.id !== characterD.id)
    setCharacters(newCharacters)
  }

  const handleValue = (event) => {
    const { value } = event.target
    setName(value)
  }
  
  const filteredCharacters = () => {
    return characters.filter(character => {
      return character.name
        .toLowerCase()
        .includes(name)
    })
  }


  return (
    <div className="App">

      <Filter
        name={name}
        handleValue={handleValue}
      />
      
      <CharacterContainer 
        key="characters" 
        characters={filteredCharacters()} 
        deleteCharacter={deleteCharacter}
      />
    </div>
  )
}


