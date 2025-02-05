import { useEffect } from 'react';

import  './App.css';
import SearchIcon from './search.svg';


// api key: 74abaa4b

const API_URL = 'http://www.omdbapi.com/?apikey=74abaa4b';

const App = () => {

    const fetchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    }

    useEffect(() => {
        fetchMovies('batman')
    }, [])

    return (
        <div className='App'>
            <h1>MovieLand</h1>
        </div>
    );
}

export default App;