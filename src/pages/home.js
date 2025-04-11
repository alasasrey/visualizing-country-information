// import React, { useEffect, useState } from 'react';
// import { fetchCountries } from '../api';
// import CountryDetails from '../components/countryDetails';

// const Home = () => {
//     const [country, setCountry] = useState([]);

//     useEffect(() => {
//         const getData = async () => {
//             const fetchCountryData = await fetchCountries();
//             const data = fetchCountryData.data;
//             setCountry(data);

//             // setCoordinates(data.coordinates.latitude + " " + data.coordinates.longitude);
//             console.dir(data);
//             console.log(data.coordinates.latitude);

//         };
//         getData();
//     }, []);

//     return (
//         <main className="max-w-4xl mx-auto p-4">
//             <CountryDetails country={country} />
//         </main>
//     );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../api';
import CountryDetails from '../components/countryDetails';
import SearchBar from '../components/searchBar';
import FilterDropdown from '../components/filterDropdown';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const fetchCountryData = await fetchCountries();
            const data = fetchCountryData.data;

            setCountries(data);
            setFilteredCountries(data);

            const afghanistan = data.find((c) => c.name === 'Afghanistan');
            setSelectedCountry(afghanistan);

            // setCoordinates(data.coordinates.latitude + " " + data.coordinates.longitude);
            console.dir(data);
            // console.log(data.coordinates.latitude);

        };
        getData();
    }, []);

    const handleSearch = (query) => {
        const results = countries.filter((c) =>
            c.name.common.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCountries(results);
        setSelectedCountry(results[0] || null);
    };

    const handleFilter = (value) => {
        let filtered = countries;

        if (value === 'high') {
            filtered = countries.filter((c) => c.population > 50000000);
        } else if (value === 'low') {
            filtered = countries.filter((c) => c.population < 10000000);
        } else if (value) {
            filtered = countries.filter((c) => c.region === value);
        }

        setFilteredCountries(filtered);
        setSelectedCountry(filtered[0] || null);
    };

    return (
        <main className="max-w-4xl mx-auto p-4">
            <SearchBar onSearch={handleSearch} />
            <FilterDropdown onFilter={handleFilter} />
            {selectedCountry ? (
                <CountryDetails country={selectedCountry} />
            ) : (
                <p>No country found.</p>
            )}
        </main>
    );
};

export default Home;
