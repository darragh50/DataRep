import MovieItem from "./movieitem";
import read from './read'

//Create new function component
//Create constant Movies variable
const Movies = (props) => {
    //Return movie
    return props.myMovies.map(
        (movie) => {
            //Pass individual movie
            return <MovieItem myMovie={movie}/>
        }
    )

}

export default Movies;