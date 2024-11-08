import { useState } from "react";
import axios from "axios";

function Create() {
  //Set default values to empty
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  /*
  //handleSubmit used to log all entries to the console
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(year);
    console.log(poster);
  }*/

 //Lab6. Ex5. Modify handleSubmit
 const handleSubmit = (e) => {
  e.preventDefault();
  
  //Print variables 
  console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
  
  //Variable movie and its contents
  const movie = {
    title: title,
    year: year,
    poster: poster
  };
  
  //Axios makes a http request to localhost:4000/api/movies
  axios.post('http://localhost:4000/api/movies', movie)
    //One funtion to run when a promise is fulfilled, (.then) and one funtion to run when a promise is rejected (.catch)
    //Res used to send back the desired HTTP response 
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.data));
};

//Information to be returned to the website
  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        {/**Movie title - form to set title to user entry  */}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>
        {/**Movie year - form to set year to user entry  */}
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }}
          />
        </div>
        {/**Movie poster - form to set poster to user entry  */}
        <div className="form-group">
          <label>Add Movie Poster: </label>
          <input type="text"
            className="form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }}
          />
        </div>
        {/**Button the can be clicked to send entry to handleSubmit */}
        <input type="submit" value="Add Movie " />
      </form>
    </div>
  );
}

export default Create;