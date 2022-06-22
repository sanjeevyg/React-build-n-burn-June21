import React from 'react'

export default function characterCard(props) {
    const handleDelete = (event) => {
        event.preventDefault()
        props.deleteCharacter(props.character)
    }
    
    return (
        <div className='card'>
            <img src={props.character.image} height='200' width='200' alt='character'/>
            <div>{props.character.name}</div>
            <button onClick={(event) => handleDelete(event)}>Delete</button>
        </div>
    )
}
