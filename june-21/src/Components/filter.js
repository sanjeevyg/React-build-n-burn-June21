import React from 'react'

export default function filter({name, handleValue}) {
  return (
    <div>
        <form>
            <label htmlFor='name' id='label'>
                Name
            </label>
            <input 
                name='name'
                type='text'
                id='character-name'
                value={name}
                placeholder="name"
                onChange={handleValue}
            />
        </form>

    </div>
  )
}





















// <div>
// <form>
//     <label htmlFor='name' id='label'>
//         Name
//     </label>
//     <input 
//         id='character-name'
//         name='name'
//         value={ name }
//         placeholder='name'
//         onChange={handleValue}
//     />
// </form>
// </div>
