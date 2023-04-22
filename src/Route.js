import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './Components/HomePage/HomePage';
import LoginPage from './Components/LoginPage/LoginPage';
import RegistrationPage from './Components/RegistrationPage/RegistrationPage';
import NavigationBar from './Components/NavigationBar';
import JobResultsPage from './Components/JobResultsPage/JobResultsPage';

const AppRoutes = () => {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/signup" element={<RegistrationPage />} />
                <Route exact path="/job-results" element={<JobResultsPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;