const SearchBar = ({ onSearch }) => {
    return (
        <input
            type="text"
            placeholder="Search country..."
            className="w-full md:w-1/2 p-2 border rounded mb-4"
            onChange={(e) => onSearch(e.target.value)}
        />
    );
};

export default SearchBar;
