import './App.css';
import LoginContainer from './components/Login/loginContainer';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/homePage';
import CounselingQueue from './components/CounselingQueue/CounselingQueue';
import CounsellingTaskDetails from './components/CounselingQueue/CounsellingTaskDetails/counsellingTaskDetails';
import Temp from './components/temp';
import ViewImage from './components/viewImage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" exact element={<LoginContainer />} />
          <Route path="/homepage" exact element={<HomePage />} />
          <Route path="/counselingQueue" exact element={<CounselingQueue />} />
          <Route path="/counselingTask" exact element={<CounsellingTaskDetails />} />
          <Route path="/temp" exact element={<Temp />} />
          <Route path="/viewImage" exact element={<ViewImage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
