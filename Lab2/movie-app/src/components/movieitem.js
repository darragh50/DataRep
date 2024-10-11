//New movieitem component
const MovieItem = (props) => {
    
    //Lab4
    /*useEffect(
        ()=>{

        },[]
    );*/
    
    //Pass JSON data as props to the MovieItem component
    return(
        <div>
            {/**Call JSON data and displays it for each array */}
            <h3>{props.myMovie.Title}</h3>
            <h3>{props.myMovie.Year}</h3>
            <img src={props.myMovie.Poster}/>
        </div>
    );
}

export default MovieItem;