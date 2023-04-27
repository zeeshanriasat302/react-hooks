import React, { useState } from 'react'

function UseStateHookCounter3() {
    const [name, setName] = useState({firstName: '', lastName: '' })
  return (
    <>
    <form>
        <input 
            type='text' 
            value={name.firstName} 
            onChange={(e) => setName({...name, firstName: e.target.value })} 
            />

        <input 
            type='text' 
            value={name.lastName} 
            onChange={e => setName({...name, lastName: e.target.value })} 
            />

        <h1>First Name- {name.firstName}</h1>
        <h1>Last Name- {name.lastName}</h1>


    </form>

    </>
  )
}

export default UseStateHookCounter3