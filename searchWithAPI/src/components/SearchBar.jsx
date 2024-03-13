import React from 'react'
import { useState } from 'react';

function SearchBar( { onSubmit } ) {

  const [term,setTerm] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term)
  };

  const handleChange = (event) => {
    setTerm(
      (previous) => previous = event.target.value   
    )
  };

  return (
    <>
    <div>
      <form onSubmit={handleFormSubmit}>
        <p>{term}</p>
        <input value={term} type="text" className='border border-black m-5' onChange={handleChange}/>
      </form>
    </div>
    </>
  )
}

export default SearchBar