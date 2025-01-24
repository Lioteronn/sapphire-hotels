import React from 'react';
import Room from './Room';
import BookingProgressBar from './BookingProgressBar';
import NavigationBar from './NavigationBar';

const RoomsPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <NavigationBar />
            <div className="pt-20">
                <BookingProgressBar currentStep={2} />
                <div className="max-w-7xl mx-auto p-6 font-bitter" >
                    <h1 className="text-3xl font-semibold mb-8 text-center">
                        Seleccione su habitación
                    </h1>
                    <div className="space-y-6">
                        <Room
                            title="STUDIO SUITES"
                            size="80 metros cuadrados"
                            capacity="Capacidad para 4 personas"
                            description="Disfrute de la tranquilidad inmerso en las vistas panorámicas del mar"
                            price="500"
                            image="src/assets/hotelparis.jpg"
                            icon="bed"
                        />
                        <Room
                            title="DELUXE ROOMS"
                            size="120 metros cuadrados"
                            capacity="Capacidad para 6 personas"
                            description="Mejore su estadía con vistas trascendentales que se extienden hasta el horizonte."
                            price="800"
                            image="/src/assets/hotelmarrakech.jpg"
                            icon="bed"
                        />
                        <Room
                            title="LUXURY ROOMS"
                            size="150 metros cuadrados"
                            capacity="Capacidad para 8 personas"
                            description="Sumérjase en el lujo absoluto, con una vista panorámica del océano y servicios exclusivos."
                            price="2000"
                            image="src/assets/hotelparis.jpg"
                            icon="bed"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomsPage;