import './App.css';

import {BrowserRouter as Router}
from 'react-router-dom';
import Body from './Body';
import Header from './Header';
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Body />
      </div>
    </Router>
  );
}

export default App;
