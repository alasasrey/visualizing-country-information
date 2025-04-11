import Flag from './flag';
import Borders from './borders';

const CountryDetails = ({ country }) => {
    if (!country) return <p>Loading...</p>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{country.name}</h2>
            <Flag src={country.flags} alt={country.name} />
            <p><strong>Capital:</strong> {country.capital?.[0]}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Subregion:</strong> {country.subregion}</p>
            <p><strong>Population:</strong> {country.population}</p>
            <p><strong>Area:</strong> {country.area} km²</p>
            <p><strong>Coordinates:</strong> {country.coordinates}</p>
            <p><strong>Timezones:</strong> {country.timezones}</p>
            <p><strong>Currency:</strong> {country.currencies}</p>
            <p><strong>Languages:</strong> {country.languages}</p>
            <Borders borders={country.borders} />
        </div>
    );
};

export default CountryDetails;
