import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Landing from "./pages/LandingPage"; 
import Home from "./pages/HomePage/HomePage"; 
import Quiz from "./pages/QuizPage/QuizPage";


function App() {
  return ( 
    <Router> 
      <Routes> 
        <Route exact path="/" element={<Landing />} /> 
        <Route exact path="/Home" element={<Home />} /> 
        <Route exact path="/Home/Quiz" element={<Quiz />} /> 
      </Routes>
    </Router>
  );
}

export default App;
