// import logo from './logo.svg';
import './App.css';
import MainPageComponent from "./page/mainpage/Mainpage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './page/page1/Page1';

function App() {
  return (

    <Router>
        <Routes>
            <Route path="/" element={<MainPageComponent/>} />
            <Route path="/profile" element={<Page1/>} />
        </Routes>
    </Router>

  );
}

export default App;
