import './App.css';
import Routers from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routers/>
    </Router>
    </>
  );
}

export default App;
