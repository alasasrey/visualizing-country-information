import Flag from './flag';
import Borders from './borders';

const CountryDetails = ({ country }) => {
    if (!country) return <p>Loading...</p>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{country.name.common}</h2>
            <Flag src={country.flags.svg} alt={country.name.common} />
            <p><strong>Capital:</strong> {country.capital?.[0]}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Subregion:</strong> {country.subregion}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Area:</strong> {country.area} km²</p>
            <p><strong>Coordinates:</strong> {country.latlng.join(', ')}</p>
            <p><strong>Timezones:</strong> {country.timezones.join(', ')}</p>
            <p><strong>Currency:</strong> {Object.values(country.currencies)[0].name}</p>
            <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
            <Borders borders={country.borders} />
        </div>
    );
};

export default CountryDetails;
