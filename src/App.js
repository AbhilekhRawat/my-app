import { useState } from 'react';
import './App.css';
import Navbar from './componentts/Navbar';
import TextForm from './componentts/TextForm';
import Alert from './componentts/Alert';
import About from './componentts/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("DarkMode has been Enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'White';
      showAlert("LightMode has been Enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Myapp" mode={mode} toggleMode={toggleMode}  />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route exact path="/about"
              element={<About/>}>
            </Route>
            <Route exact path="/"
              element={<TextForm showAlert={showAlert} heading="Enter the Text below" mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;