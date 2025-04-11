import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../api';
import CountryDetails from '../components/countryDetails';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [afghanistan, setAfghanistan] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const fetchCountryData = await fetchCountries();
            const data = fetchCountryData.data;
            setCountries(data);
            // const afg = data.find(country => country.name === 'Afghanistan');
            setAfghanistan(data.name);

            console.dir(data);
            console.log(data.flag);

        };
        getData();
    }, []);

    return (
        <main className="max-w-4xl mx-auto p-4">
            <CountryDetails country={afghanistan} />
        </main>
    );
};

export default Home;
