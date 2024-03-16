import React from 'react'
import { useState } from 'react';

function SearchBar( { onSubmit, 
  //term, 
  //setTerm 
} ) {

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
      <form onSubmit={handleFormSubmit} className='flex flex-row items-center justify-between gap-3 border rounded-md border-blue-600'>
        {/* <p>{term}</p> */}
        <label htmlFor='search' className='px-5'>search</label>
        <input id='search' value={term} type="text" className='border-l border-l-blue-600 p-3 w-full' onChange={handleChange}/>
      </form>
    </div>
    </>
  )
}

export default SearchBar