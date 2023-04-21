import React from 'react';

import RegistrationPage from './Components/RegistrationPage/RegistrationPage';
import NavigationBar from './Components/NavigationBar';
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      {/* <RegistrationPage /> */}
      <LoginPage />
    </div>
  );
}

export default App;
