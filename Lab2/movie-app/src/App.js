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
    //Ex5. Set up routing - create each link
    <Router>
    <NavigationBar />
    <Routes>
      <Route path="/home" element={<Content />} />
      <Route path="/read" element={<h1>Read Component</h1>} />
      <Route path="/create" element={<h1>Create Component</h1>} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
