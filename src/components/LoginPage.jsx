import { useState } from "react";

const LoginPage = ({ onGoToRegister }) => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login data:", formData);
        alert("Login successful!");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 font-worksans">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 text-gray-700 font-worksans" htmlFor="username">
                            Nombre de Usuario
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1 text-gray-700 font-worksans" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-200 font-worksans"
                    >
                        Iniciar sesión
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <span className="text-sm font-worksans">¿No tienes cuenta? </span>
                    <button
                        onClick={onGoToRegister}
                        className="text-blue-500 text-sm font-worksans"
                    >
                        Regístrate aquí
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;