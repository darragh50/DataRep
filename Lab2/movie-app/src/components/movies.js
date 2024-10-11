import MovieItem from "./movieitem";
import read from './read'

//Create new function component
//Create constant Movies variable
const Movies = (props) => {
    //Return movie
    return props.myMovies.map(
        (movie) => {
            //Pass individual movie
            //Create unique key identifier to remove errors (key= onwards)
            return <MovieItem myMovie={movie} key={movie.imdbID}/>
        }
    )

}

export default Movies;