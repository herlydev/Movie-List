import React, {useContext} from 'react';
import {MovieContext} from '../Contexts/MovieContext';

const Navbar = () => {
    const {movies} = useContext(MovieContext)
    return (
        <div className="navbar">
            <h1>Movie List</h1>
            <p>Current you have {movies.lenght} movies to watch</p>
        </div>
    )
}
export default Navbar