import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="absolute top-0 w-full bg-black text-white p-4 z-10 font-bitter">
            <div className="flex justify-between items-center">
                <MenuButton onClick={toggleMenu} />
                <div className="flex items-center gap-8">
                    <ReservationButton />
                    <LoginButton />
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 h-full bg-black text-white p-4 transition-transform transform ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
                style={{ width: '250px' }}
            >
                <CloseButton onClick={toggleMenu} />
                <ul className="space-y-4 mt-8">
                    <li><Link to="/" className="text-lg hover:text-gray-300 transition">Home</Link></li>
                    <li><Link to="/special-requests" className="text-lg hover:text-gray-300 transition">Special Requests</Link></li>
                </ul>
            </div>
        </nav>
    );
};

const MenuButton = ({ onClick }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 cursor-pointer"
            onClick={onClick}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    );
};

const CloseButton = ({ onClick }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 cursor-pointer mb-4"
            onClick={onClick}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
};

const ReservationButton = () => {
    return (
        <Link to="/register" className="text-lg hover:text-gray-300 transition">RESERVAR</Link>
    );
};

const LoginButton = () => {
    return (
        <Link to="/login" className="flex items-center gap-2 mr-2 cursor-pointer hover:text-gray-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-lg">ACCESO</span>
        </Link>
    );
};

export default NavigationBar;