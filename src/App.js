import {useEffect, useState} from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCart from "./MovieCart";
//ab893e09
const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=ab893e09';
const movie1={
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
  };
  
const App = () => {
    const[movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState('');
   const searchMovies = async (title) => {
const response = await fetch(${API_URL}&s=${title});
const data = response.json();
console.log(data)
data.then((res) => {
setMovies(res.Search);
});
}
    useEffect(()=>{
        searchMovies('Spiderman');

    },[])
  return (
    <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
            <input
            placeholder="search for movies"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <img src={searchIcon}
            alt="search"
            onClick={()=>searchMovies(searchTerm)}

            />
        </div>

        {
            movies?.length > 0 ? (
                <div className="container">
          {
            movies.map((movie)=>(
                <MovieCart movie={movie}/>

            ))}
        </div>
            ):
            (
               <div className="empty">
                <h2>No movies found</h2> 
                </div>
            )
        }
        
 </div>
  );
}

export default App
