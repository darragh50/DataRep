import logo from './logo.svg';
import './App.css';
//Ex3. Import components 
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
//Ex4. Import Bootstrap's CSS 
import 'bootstrap/dist/css/bootstrap.min.css';
//Ex5. Import react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navbar';

function App() {
  return (
    //Ex5. Set up routing - calling navbar.js links
    <Router>
    <NavigationBar />
    <Routes>
      {/**Ex6. Display the Footer component when the URL changes */}
      <Route path="/home" element={<Content />} />
      <Route path="/read" element={<Footer /> } />
      <Route path="/create" element={<Header /> } />
    </Routes>
  </Router>
  );
}

export default App;
