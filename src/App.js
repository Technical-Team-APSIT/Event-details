import './App.css';
import BoxCricket from './components/box_cricket'; // Corrected import
import Home from './pages/Home'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <BoxCricket />
        
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
