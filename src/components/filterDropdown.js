const FilterDropdown = ({ onFilter }) => {
    return (
        <select
            onChange={(e) => onFilter(e.target.value)}
            className="w-full md:w-1/2 p-2 border rounded mb-4"
        >
            <option value="">All</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Oceania">Oceania</option>
            <option value="high">High Population (above 50M)</option>
            <option value="low">Low Population (below 10M)</option>
        </select>
    );
};

export default FilterDropdown;
