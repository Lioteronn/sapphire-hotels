
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

const MenuButton = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
             className="size-8 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>

    );
};

const ReservationButton = () => {
    return (
        <button className="text-lg">RESERVAR</button>
    );
};

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

export default NavigationBar;