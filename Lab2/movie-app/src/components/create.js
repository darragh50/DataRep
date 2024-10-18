import { useState } from "react";

function Create() {
  const [title, setTitle] = useState('');

  //Handle new events from the button click and log information
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  }

  //Return all values referenced in handleSubmit()
  return (
    <div>
      <h2>This is my Create Component.</h2>
      {/**Form that will upload data to a server */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

export default Create;