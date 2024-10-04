//Ex3.Componentization - Move the "Hello World" 
//and time logic into a reusable component, Content.js.
import React from 'react';

const Content = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Content;