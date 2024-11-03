import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from './components/Main';
import Call from './components/Call';

function App() {
  return (
    <Router>
      <Routes><Route path='/' element={<Main/>}/></Routes>
      <Routes><Route path='/room/:id' element={<Call/>}/></Routes>
    </Router>
  );
}

export default App;
