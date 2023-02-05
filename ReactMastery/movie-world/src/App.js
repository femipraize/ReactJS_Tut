import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';

const API_URL ='http://www.omdbapi.com?apikey=13cf17c9'

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.search);
  }

  useEffect(() =>{
    searchMovies('spiderman')
  }, [])
  return (
    <h1>Web App</h1>
  );
}

export default App;

