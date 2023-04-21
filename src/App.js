import React from 'react';

// import RegistrationPage from './Components/RegistrationPage/RegistrationPage';
import NavigationBar from './Components/NavigationBar';
import './App.css';
// import LoginPage from './Components/LoginPage/LoginPage';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      {/* <RegistrationPage /> */}
      {/* <LoginPage /> */}
      <HomePage />
    </div>
  );
}

export default App;
