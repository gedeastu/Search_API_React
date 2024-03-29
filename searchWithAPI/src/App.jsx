
import './App.css'
import React,{useState} from 'react'
import ImageList from './components/ImageList'
import SearchBar from './components/SearchBar'
import searchImages from './services/api'
import ImageShow from './components/ImageShow'

function App() {
  //for images list
  const [images,setImages] = useState([])

  //make state for value of input & parameter onSubmit
  // const [term,setTerm] = useState('')

  //for search bar to handling action when submit and triggered API Unsplash
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  }

  
  return (
    <>

      <SearchBar onSubmit={handleSubmit} 
      //term={term} 
      //setTerm={setTerm}
      />
      <ImageList 
      images={images} 
      //term={term}
      />
    </>
  )

}

export default App
