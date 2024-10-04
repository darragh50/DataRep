import logo from './logo.svg';
import './App.css';
//Ex3. Import components 
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

function App() {
  return (
    <div>
      {/**Ex2. Print "Hello Wordl" & the current time
      <he>Hello World!</he>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>*/}

      {/**Ex3. Call created components */}
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
