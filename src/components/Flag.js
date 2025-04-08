const Flag = ({ flagUrl, name }) => (
    <img src={flagUrl} alt={`Flag of ${name}`} className="w-48 h-auto rounded shadow mb-4" />
);

export default Flag;
