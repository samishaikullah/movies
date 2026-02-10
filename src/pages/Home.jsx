import MovieCard from "../components/MovieCard"
import { useState } from "react"
import "../css/Home.css"

function Home() {

    const [searchQuery, setSearchQuery] = useState ("");

    const movies = [
        {id: 1, title: "Version7", relase_date: "2020"},
        {id: 2, title: "Terminator", relase_date: "1999"},
        {id: 1, title: "The Matrix", relase_date: "1998"},
        ]

    const handleSearch = () => {

    }    

    return <div className="home">
        <form onSubmit={handleSearch} className="searc-form">
            <input type="text"
             placeholder="Search for movies..."
             className="search-input"
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             />
             <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && ( 
                <MovieCard movie={movie} key={movie.id}/>
            )
            )}

        </div>
    </div>
}

export default Home