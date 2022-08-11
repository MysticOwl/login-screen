import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';
import Home from './pages/Home';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Home/>
      </div>
    </Router>
  );
}

export default App;
