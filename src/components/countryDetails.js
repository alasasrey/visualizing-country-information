import Flag from './flag';
import Borders from './borders';
import Coordinates from './coordinates';

const CountryDetails = ({ country }) => {
    // if there is no country data it will display the loading text
    if (!country) return <p>Loading...</p>;

    // const coordinateText = country
    //     ? Latitude : ${ country.coordinates.latitude }, Longitude: ${ country.coordinates.longitude }
    //         : "N/A";

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{country.name}</h2>
            <Flag src={country.flag} alt={country.name} />
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Subregion:</strong> {country.subregion}</p>
            <p><strong>Population:</strong> {country.population}</p>
            <p><strong>Area:</strong> {country.area} km²</p>
            {/* <p><strong>Coordinates:</strong> {country.coordinates.latitude + " " + country.coordinates.longitude} </p> */}
            {/* <p><strong>Coordinates:</strong> {country.coordinates} </p> */}
            <Coordinates coordinates={country.coordinates} />
            <p><strong>Timezones:</strong> {country.timezones}</p>
            <p><strong>Currency:</strong> {country.currency}</p>
            <p><strong>Languages:</strong> {country.languages}</p>
            <Borders borders={country.borders} />
        </div>
    );
};

export default CountryDetails;
