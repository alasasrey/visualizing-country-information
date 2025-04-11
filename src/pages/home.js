import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../api';
import CountryDetails from '../components/countryDetails';
import SearchBar from '../components/searchBar';
import FilterDropdown from '../components/filterDropdown';
// import { data } from 'autoprefixer';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [displayedCountries, setDisplayedCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterValue, setFilterValue] = useState('');

    useEffect(() => {
        const getData = async () => {
            const fetchCountryData = await fetchCountries();
            const data = fetchCountryData.data;

            setCountries(data);
            setDisplayedCountries(data);

            // default country to display
            const afghanistan = data.find((c) => c.name === 'Afghanistan');
            setSelectedCountry(afghanistan);
        };
        getData();
    }, []);

    // using this function to refresh and update the search and results data
    useEffect(() => {
        let results = [...countries];

        // Filter by region or population
        if (filterValue === 'high') {
            results = results.filter((c) => c.population > 50000000);
        } else if (filterValue === 'low') {
            results = results.filter((c) => c.population < 10000000);
        } else if (filterValue) {
            results = results.filter((c) => c.region === filterValue);
        }

        // Apply search
        if (searchQuery) {
            results = results.filter((c) =>
                c.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setDisplayedCountries(results);
        setSelectedCountry(results[0] || null);
    }, [searchQuery, filterValue, countries]);

    return (
        <main className="max-w-4xl mx-auto p-4">
            <SearchBar onSearch={setSearchQuery} />
            <FilterDropdown onFilter={setFilterValue} />
            {selectedCountry ? (
                <CountryDetails country={selectedCountry} />
            ) : (
                <p className="mt-4 text-red-500">No country found.</p>
            )}
        </main>
    );
};

export default Home;
