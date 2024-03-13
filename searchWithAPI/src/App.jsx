
import './App.css'
import SearchBar from './components/SearchBar'
import searchImages from './services/api'

function App() {

  const handleSubmit = (term)=>{
    console.log(term)
    searchImages(term)
  }

  return (
    <>
      <SearchBar onSubmit = {handleSubmit}/>
    </>
  )

}

export default App
