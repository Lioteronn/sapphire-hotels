import NavigationBar from "./components/NavigationBar";

// SearchSection.jsx
const SearchSection = () => {
    return (
        <div className="absolute top-32 left-0 right-0 z-10 px-4">
            <div className="max-w-6xl mx-auto flex gap-4">
                <SearchDropdown placeholder="Encuentra tu hotel" />
                <SearchDropdown placeholder="1 Habitación - 2 Adultos" />
                <SearchDropdown placeholder="Seleccionar fecha" />
                <SearchButton />
            </div>
        </div>
    );
};

// SearchDropdown.jsx
const SearchDropdown = ({ placeholder }) => {
    return (
        <div className="flex-1">
            <select
                className="w-full p-4 bg-white bg-opacity-90 border border-gray-300 rounded appearance-none"
                style={{
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path d="M5.5 7.5L10 12l4.5-4.5H5.5z"/></svg>')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1rem',
                }}
            >
                <option>{placeholder}</option>
            </select>
        </div>
    );
};


// SearchButton.jsx
const SearchButton = () => {
    return (
        <button className="bg-black text-white px-6 py-3 rounded">
            CONSULTAR TARIFAS
        </button>
    );
};


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