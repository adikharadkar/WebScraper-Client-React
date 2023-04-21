import React from 'react';

import RegistrationPage from './Components/RegistrationPage/RegistrationPage';
import NavigationBar from './Components/NavigationBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <RegistrationPage />
    </div>
  );
}

export default App;
