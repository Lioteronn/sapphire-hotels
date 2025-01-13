// NavigationBar.jsx
const NavigationBar = () => {
    return (
        <nav className="absolute top-0 w-full bg-black text-white p-4 z-10">
            <div className="flex justify-between items-center">
                <MenuButton />
                <div className="flex items-center gap-8">
                    <ReservationButton />
                    <LoginButton />
                </div>
            </div>
        </nav>
    );
};

// MenuButton.jsx
const MenuButton = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
             className="size-8 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>

    );
};

// ReservationButton.jsx
const ReservationButton = () => {
    return (
        <button className="text-lg">RESERVAR</button>
    );
};

// LoginButton.jsx
const LoginButton = () => {
    return (
        <div className="flex items-center gap-2 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>ACCESO</span>
        </div>
    );
};

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