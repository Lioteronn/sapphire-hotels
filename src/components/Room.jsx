import { useNavigate } from "react-router-dom";

const Room = ({ title, size, capacity, description, price, image }) => {
    const navigate = useNavigate();

    const handleReserve = () => {
        navigate('/special-requests');
    };

    return (
        <div className="flex p-6 bg-white border rounded-none shadow-md mb-4">
            <div className="w-1/3 border-2 border-gray-400 pb-3">
                <img src={image} alt={title} className="w-full h-auto max-w-lg" />
                <div className="mt-4 text-lg font-medium text-center font-worksans flex items-center justify-between pl-6 pr-6">
                    {price}€ / NOCHE
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)', marginLeft: '8px' }}>
                        <path d="M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.811-2.75-2-3.443zM18 7v2h-5V7h5zM6 7h5v2H6V7zm14 9H4v-3c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2v3z"></path>
                    </svg>
                </div>
                <h3 className="mt-5 text-center text-4xl font-libre">{title}</h3>
            </div>
            <div className="ml-6 w-2/3 space-y-6">
                <p className="mt-2 font-worksans">Tamaño: {size}</p>
                <p className="mt-2 font-worksans">Capacidad: {capacity}</p>
                <p className="mt-2 font-worksans">{description}</p>
                <button
                    onClick={handleReserve}
                    className="mt-4 px-4 py-2 bg-black text-white rounded rounded-none"
                >
                    RESERVAR
                </button>
            </div>
        </div>
    );
};

export default Room;