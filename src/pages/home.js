import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../api';
import CountryDetails from '../components/countryDetails';

const Home = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const fetchCountryData = await fetchCountries();
            const data = fetchCountryData.data;
            setCountry(data);

            // setCoordinates(data.coordinates.latitude + " " + data.coordinates.longitude);
            console.dir(data);
            console.log(data.coordinates.latitude);

        };
        getData();
    }, []);

    return (
        <main className="max-w-4xl mx-auto p-4">
            <CountryDetails country={country} />
        </main>
    );
};

export default Home;
