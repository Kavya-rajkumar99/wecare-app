import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home'
import { CoachSignUp } from './components/CoachSignUp';
import { UserSignUp } from './components/UserSignUp';
import { CoachLogin } from './components/CoachLogin';
import { UserLogin } from './components/UserLogin';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coachsignup" element={<CoachSignUp />} />
        <Route path="/usersignup" element={<UserSignUp />} />
        <Route path="/coachlogin" element={<CoachLogin />} />
        <Route path="/userlogin" element={<UserLogin />} />
      </Routes>
    </div>
  );
}

export default App;
