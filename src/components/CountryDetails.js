import Flag from "./Flag";
import Borders from "./Borders";

const CountryDetails = ({ country }) => {
    return (
        <div className="max-w-xl mx-auto bg-white shadow p-6 rounded-lg">
            <Flag flagUrl={country.flags.png} name={country.name.common} />
            <h2 className="text-2xl font-bold my-2">{country.name.common}</h2>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Region/Subregion:</strong> {country.region} / {country.subregion}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
            <p><strong>Coordinates:</strong> [{country.latlng.join(", ")}]</p>
            <p><strong>Timezones:</strong> {country.timezones.join(", ")}</p>
            <p><strong>Currencies:</strong> {Object.values(country.currencies).map(c => c.name).join(", ")}</p>
            <p><strong>Languages:</strong> {Object.values(country.languages).join(", ")}</p>
            <Borders borders={country.borders} />
        </div>
    );
};

export default CountryDetails;
