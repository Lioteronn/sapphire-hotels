import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import SearchSection from './components/SearchSection';
import SpecialRequestsForm from './components/SpecialRequestsForm';
import RoomsPage from "./components/RoomsPage.jsx";

const App = () => {
    return (
        <Router>
            <div className="relative min-h-screen">
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<SearchSection />} />
                    <Route path="/special-requests" element={<SpecialRequestsForm />} />
                    <Route path="/rooms" element={<RoomsPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;