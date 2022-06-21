import React from 'react'
import CharacterCard from './characterCard'

export default function characterContainer(props) {

    const handleCharacters = () => {
        return props.characters.map(character => {
        return( 
            <CharacterCard 
                key={character.id} 
                character={character} 
                deleteCharacter={props.deleteCharacter}
            />)
        })
    }

    return (
        <>
           {handleCharacters()}
        </>
    )
}
