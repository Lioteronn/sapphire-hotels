import NavigationBar from "./components/NavigationBar";
import SearchSection from "./components/SearchSection.jsx";

// App.jsx
const App = () => {
    return (
        <div className="relative min-h-screen">
            <NavigationBar />
            <SearchSection />
        </div>
    );
};

export default App;