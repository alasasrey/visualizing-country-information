const Coordinates = ({ coordinates }) => (
    <div>
        <p><strong>Coordinates:</strong></p>
        <ul className="list-disc ml-6">
            {/* if statement but shorter */}
            {/* {coordinates && coordinates.length > 0 ? coordinates.map((b, i) => <li key={i}>{b}</li>) : <li>None</li>} */}
            {/* TODO: FIX THIS SO THAT IT CAN DISPLAY Coordinates! */}
            {coordinates && coordinates.length > 0 ? coordinates.map((b, i) => <li key={i}>{b}</li>) : <li>None</li>}
        </ul>
    </div>
);

export default Coordinates;
