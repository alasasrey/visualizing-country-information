const Borders = ({ borders }) => (
    <div>
        <h3 className="font-bold mt-2">Bordering Countries:</h3>
        <ul className="list-disc ml-6">
            {/* if statement but shorter */}
            {borders && borders.length > 0 ? borders.map((b, i) => <li key={i}>{b}</li>) : <li>None</li>}
        </ul>
    </div>
);

export default Borders;
