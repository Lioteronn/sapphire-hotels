import PropTypes from 'prop-types';

const SearchSection = () => {
    return (
        <div className="relative top-32 left-0 right-0 z-10 px-4 min-h-screen">
            <div className="relative max-w-6xl mx-auto flex flex-col items-center gap-4">
                <div className="flex gap-4 w-full">
                    <SearchDropdown placeholder="Encuentra tu hotel" options={["Hotel 1", "Hotel 2", "Hotel 3"]} />
                    <SearchDropdown placeholder="1 Habitación - 2 Adultos" options={["1 Habitación - 1 Adulto", "1 Habitación - 2 Adultos", "2 Habitaciones - 4 Adultos"]} />
                    <DateSelector />
                    <SearchButton />
                </div>
            </div>
        </div>
    );
};

const SearchDropdown = ({ placeholder, options }) => {
    return (
        <div className="flex-1">
            <select
                className="w-full pl-3 pt-2.5 pb-2.5 font-semibold italic bg-white bg-opacity-90 border-black border-2 rounded appearance-none"
                style={{
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path d="M5.5 7.5L10 12l4.5-4.5H5.5z"/></svg>')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1rem',
                }}
            >
                <option>{placeholder}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

SearchDropdown.propTypes = {
    placeholder: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const DateSelector = () => {
    return (
        <div className="flex-1">
            <input
                type="date"
                className="w-full pl-3 pt-2.5 pb-2.5 font-semibold italic bg-white bg-opacity-90 border-black border-2 rounded"
            />
        </div>
    );
};

const SearchButton = () => {
    return (
        <button className="bg-black text-white px-6 py-3 rounded">
            CONSULTAR TARIFAS
        </button>
    );
};

export default SearchSection;