import React from 'react';
import BookingProgressBar from './BookingProgressBar';
import NavigationBar from './NavigationBar';
import {useNavigate} from "react-router-dom";

const SpecialRequestsForm = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <NavigationBar />
            <div className="pt-20">
                <BookingProgressBar currentStep={3} />
                <div className="flex items-center justify-center p-6">
                    <SpecialRequests />
                </div>
            </div>
        </div>
    );
}

const SpecialRequests = () => {
    const navigate = useNavigate();

    const handleContinueToPayment = () => {
        navigate('/payment');
    };

    return (
        <div className="p-10 bg-gray-50 w-full max-w-2xl mx-auto rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-center">
                ¿Cómo podemos hacer que tu estancia sea especial?
            </h2>
            <form className="grid grid-cols-2 gap-6">
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        className="h-5 w-5 text-indigo-600 border-gray-300 rounded"
                    />
                    <span>CHECK-IN TEMPRANO</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        className="h-5 w-5 text-indigo-600 border-gray-300 rounded"
                    />
                    <span>PISO SUPERIOR</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        className="h-5 w-5 text-indigo-600 border-gray-300 rounded"
                    />
                    <span>SALIDA TARDÍA</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        className="h-5 w-5 text-indigo-600 border-gray-300 rounded"
                    />
                    <span>ACCESIBLE A DISCAPACITADOS</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        className="h-5 w-5 text-indigo-600 border-gray-300 rounded"
                    />
                    <span>ADAPTADA PARA MASCOTAS</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        className="h-5 w-5 text-indigo-600 border-gray-300 rounded"
                    />
                    <span>PODER FUMAR</span>
                </label>
            </form>
            <button
                onClick={handleContinueToPayment}
                type="submit"
                className="mt-8 w-full py-3 bg-black text-white text-base font-medium rounded hover:bg-gray-800"
            >
                CONTINUAR CON EL PAGO
            </button>
        </div>
    );
};

export default SpecialRequestsForm;