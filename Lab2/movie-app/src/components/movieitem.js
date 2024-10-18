//Import
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

//New movieitem component
function MovieItem(props) {
    useEffect(() => {
      console.log("Movie Item:", props.myMovie);
    }, [props.myMovie]); //Only run this effect when the mymovie prop changes
    
    return (
      <div>
        <Card>
            {/**Call probs and display JSON data (title, year, poster) */}
            {/**Eeach movie item is displayed as a card with info as a footer */}
          <Card.Header>{props.myMovie.Title}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <img src={props.myMovie.Poster} alt={props.myMovie.Title} />
              <footer>{props.myMovie.Year}</footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    );
  }
  
  export default MovieItem;
  