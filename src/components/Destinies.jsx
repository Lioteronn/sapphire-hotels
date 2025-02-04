import React, { useState } from 'react';
import BookingProgressBar from './BookingProgressBar';
import NavigationBar from './NavigationBar';
import {DESTINATIONS} from '../utils/destinations.js';
import { useNavigate } from 'react-router-dom';

const Destinies = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <NavigationBar />
            <div className="pt-20">
                <BookingProgressBar currentStep={1} />
                <div className="flex items-center justify-center p-6">
                    <DestinationSelection />
                </div>
            </div>
        </div>
    );
}

const DestinationSelection = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDates, setSelectedDates] = useState([]);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [bookingData, setBookingData] = useState({
        destination: '',
        basePrice: 0,
        dates: [],
        adults: 0,
        children: 0
    });

    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/rooms');
    };

    const handleDestinationChange = (e) => {
        const selectedId = parseInt(e.target.value);
        const selectedDestination = DESTINATIONS.find(d => d.id === selectedId);
        if (selectedDestination) {
            setBookingData({
                ...bookingData,
                destination: selectedId, // Store the ID instead of name
                basePrice: selectedDestination.basePrice
            });
        }
    };


    const updateCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        const calendar = [];
        let week = [];

        for (let i = 0; i < firstDay; i++) {
            week.push(null);
        }

        for (let day = 1; day <= lastDate; day++) {
            week.push(day);
            if ((firstDay + day) % 7 === 0) {
                calendar.push(week);
                week = [];
            }
        }

        if (week.length > 0) {
            calendar.push(week);
        }

        return calendar;
    };

    const handleDateSelect = (day) => {
        if (day === null) return;

        const updatedSelectedDates = [...selectedDates];
        const buttonIndex = updatedSelectedDates.indexOf(day);

        if (buttonIndex === -1) {
            if (updatedSelectedDates.length === 2) {
                updatedSelectedDates.splice(0, 2);
            }
            updatedSelectedDates.push(day);
        } else {
            updatedSelectedDates.splice(buttonIndex, 1);
        }

        setSelectedDates(updatedSelectedDates);
    };

    const navigateMonth = (direction) => {
        const newDate = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() + direction);
        setCurrentDate(newDate);
    };

    const calendar = updateCalendar();

    return (
        <div className="p-10 bg-gray-50 w-full max-w-4xl mx-auto rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-center">
                Selecciona tu Destino y Fechas
            </h2>

            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                            Destino
                        </label>
                        <select
                            id="destination"
                            onChange={handleDestinationChange}
                            value={bookingData.destination || ''} // Add fallback for initial empty state
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="">Seleccionar destino</option>
                            {DESTINATIONS.map(dest => (
                                <option key={dest.id} value={dest.id}>
                                    {dest.name} - {dest.basePrice}€
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-2">
                                Adultos
                            </label>
                            <input
                                type="number"
                                id="adults"
                                value={adults}
                                onChange={(e) => setAdults(Number(e.target.value))}
                                min="0"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-2">
                                Niños
                            </label>
                            <input
                                type="number"
                                id="children"
                                value={children}
                                onChange={(e) => setChildren(Number(e.target.value))}
                                min="0"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between items-center mb-4">
                        <button
                            onClick={() => navigateMonth(-1)}
                            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                        >
                        </button>
                        <span className="text-lg font-semibold">
                            {currentDate.toLocaleString('es-ES', { month: 'long', year: 'numeric' })}
                        </span>
                        <button
                            onClick={() => navigateMonth(1)}
                            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                        >
                        </button>
                    </div>

                    <table className="w-full">
                        <thead>
                        <tr>
                            {['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'].map((day) => (
                                <th key={day} className="text-center text-sm font-medium text-gray-500 p-2">{day}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {calendar.map((week, weekIndex) => (
                            <tr key={weekIndex}>
                                {week.map((day, dayIndex) => (
                                    <td key={dayIndex} className="text-center p-1">
                                        {day !== null && (
                                            <button
                                                className={`w-10 h-10 rounded-full text-sm 
                                                        ${selectedDates.includes(day)
                                                    ? 'bg-indigo-500 text-white'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                                onClick={() => handleDateSelect(day)}
                                            >
                                                {day}
                                            </button>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <button
                type="submit"
                onClick={handleContinue}
                className="mt-8 w-full py-3 bg-black text-white text-base font-medium rounded hover:bg-gray-800"
            >
                CONTINUAR
            </button>
        </div>
    );};

export default Destinies;