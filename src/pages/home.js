import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../api';
import CountryDetails from '../components/countryDetails';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [afghanistan, setAfghanistan] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchCountries();
            setCountries(data);
            const afg = data.find(c => c.name.common === 'Afghanistan');
            setAfghanistan(afg);
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
