import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';

const API_URL ='http://www.omdbapi.com?apikey=13cf17c9';

const movie1 = {
    "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
    "Year": "2016",
    "imdbID": "tt18689424",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2I4OTllM2MtMWVhNC00MjkzLWJlMDUtN2FhMGQ2ZGVjMjllXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
}

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }

  useEffect(() =>{
    searchMovies('Superman');
  }, [])
  return (
   <div className='app'>
    <h1>MovieWold</h1>

    <div className='search'>
      <input
        placeholder='Search for movies'
        value='Superman'
        onchange={() => {}}
       />
       <img 
        src={SearchIcon}
        alt='search'
        onClick={() => {}}
       />
    </div>
    <div className='container'>
      <div className='movie'>
        <p>{movie1.Year}</p>
      </div>
    </div>
   </div>
  );
}

export default App;

