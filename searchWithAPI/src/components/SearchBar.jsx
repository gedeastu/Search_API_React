import React from 'react'
import { useState } from 'react';

function SearchBar( { onSubmit } ) {

  //make state for value of input & parameter onSubmit
  const [term,setTerm] = useState('')

  //handling the submit form triggered
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term)
  };

  //handling for onChange input form
  const handleChange = (event) => {
    setTerm(
      (previous) => previous = event.target.value   
    )
  };

  return (
    <>
    <div className='m-5'>
      <form onSubmit={handleFormSubmit}>
        <p>{term}</p>
        <input value={term} type="text" className='border border-black' onChange={handleChange}/>
      </form>
    </div>
    </>
  )
}

export default SearchBar