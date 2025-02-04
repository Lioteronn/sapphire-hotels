import { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [bookingData, setBookingData] = useState({
        destination: '',
        dates: [],
        adults: 0,
        children: 0,
        roomType: '',
        basePrice: 0,
        specialRequests: [],
    });

    return (
        <BookingContext.Provider value={{ bookingData, setBookingData }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => useContext(BookingContext);
