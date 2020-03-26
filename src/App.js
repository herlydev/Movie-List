import React from 'react';
import MovieContextProvider from './Contexts/MovieContext';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';


function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Navbar />
        <MovieList />
      </MovieContextProvider>
    </div>
  );
}

export default App;
