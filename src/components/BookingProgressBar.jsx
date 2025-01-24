import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingProgressBar = ({ currentStep }) => {
    const navigate = useNavigate();
    const steps = [
        { number: 1, label: 'Destino', path: '/' },
        { number: 2, label: 'Habitaciones y tarifas', path: '/rooms' },
        { number: 3, label: 'Peticiones especiales', path: '/special-requests' },
        { number: 4, label: 'Confirmar', path: '/confirm' }
    ];

    const handleStepClick = (path) => {
        navigate(path);
    };

    return (
        <div className="w-full bg-white shadow-sm py-4">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex items-center justify-between">
                    {steps.map((step, index) => (
                        <React.Fragment key={step.number}>
                            {/* Step circle and label */}
                            <div className="flex flex-col items-center cursor-pointer" onClick={() => handleStepClick(step.path)}>
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-2
                    ${currentStep >= step.number ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'}`}
                                >
                                    {step.number}
                                </div>
                                <span className={`text-sm ${currentStep >= step.number ? 'text-black' : 'text-gray-500'}`}>
                  {step.label}
                </span>
                            </div>

                            {/* Connecting line */}
                            {index < steps.length - 1 && (
                                <div
                                    className={`h-[2px] flex-1 mx-4 ${
                                        currentStep > step.number ? 'bg-black' : 'bg-gray-300'
                                    }`}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookingProgressBar;