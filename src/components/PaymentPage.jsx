import React from 'react';
import NavigationBar from './NavigationBar';
import BookingProgressBar from './BookingProgressBar';

const PaymentPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <NavigationBar />
            <div className="pt-20">
                <BookingProgressBar currentStep={4} />
                <div className="max-w-4xl mx-auto p-6">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-6">Pago</h2>

                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Número de Tarjeta
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                        placeholder="1234 5678 9012 3456"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Fecha de Expiración
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                        placeholder="MM/YY"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Titular de la Tarjeta
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        CVV
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                        maxLength="3"
                                    />
                                </div>
                            </div>

                            <button className="w-full py-3 bg-black text-white font-medium rounded hover:bg-gray-800">
                                CONFIRMAR PAGO
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
