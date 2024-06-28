import './App.css'
import LandingPage from './Components/landingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/booked" element={<BookedPage/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
