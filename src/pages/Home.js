import { useEffect, useState } from "react";
import axios from "axios";
import CountryDetails from "../components/CountryDetails";

const Home = () => {
    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios.get("https://countries-api-abhishek.vercel.app/countries/Afghanistan")
            .then((res) => {
                setCountry(res.data[0]);

                console.log(res.data[0])

            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="p-4">
            {country ? <CountryDetails country={country} /> : <p>Loading...</p>}
        </div>
    );
};

export default Home;
