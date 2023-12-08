import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Watch from "./components/Watch";
import AlarmList from "./components/AlarmList";
import AddAlarm from "./components/AddAlarm";
import { useState } from "react";
function App() {
  const [alarms, setAlarms] = useState([]); 
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Header />
          <Routes>💜💜💜💜💜💜💜💜💜
            <Route path="/" element={<Watch />} />
            <Route path="/alarmlist" element={<AlarmList setAlarms={setAlarms} alarms={alarms} />} />
            <Route path="/addalarm" element={<AddAlarm />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
