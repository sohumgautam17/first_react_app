import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import './App.css';

const API_URL = 'http://www.omdbapi.com/?apikey=74abaa4b';

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    const fetchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    useEffect(() => {
        fetchMovies('batman');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => fetchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies Found</h2>
                </div>
            )}
        </div>
    );
};

export default App;