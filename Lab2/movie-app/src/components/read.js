//Lab 3. Task 1. Create new function components
//Import movies component
import Movies from "./movies";
//Axios is a Promise-based HTTP client
import axios from "axios";
import { useEffect,useState } from "react";

const Read = () => {
      //2d. useState used to store data returned from an API
      const [movies, setMovies] = useState([]);

      //2c. useEffect to synchronize a component with an external system
      useEffect(() => {
        //Axios used for fetching data in react applications. Fetching data from an API below
        axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
          .then((response) => {
            console.log(response.data.movies);
            setMovies(response.data.movies);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);//Empty array to stop the website firing all the time

      return(
        <div>
             {/*<h3>Hello from the read componenet</h3>;*/}
             {/**Set JSON data to myMovies variable */}
             <Movies myMovies={movies}/>
        </div>
    );
}
  
  export default Read;