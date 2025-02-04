import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import SearchSection from './components/SearchSection';
import SpecialRequestsForm from './components/SpecialRequestsForm';
import RoomsPage from "./components/RoomsPage.jsx";
import Destinies from "./components/Destinies.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import PaymentPage from "./components/PaymentPage.jsx";

const App = () => {
    return (
        <Router>
            <div className="relative min-h-screen">
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<SearchSection />} />
                    <Route path="/special-requests" element={<SpecialRequestsForm />} />
                    <Route path="/rooms" element={<RoomsPage />} />
                    <Route path="/destinies" element={<Destinies />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;