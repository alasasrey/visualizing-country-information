const Borders = ({ borders }) => {
    if (!borders) return <p>No border countries.</p>;

    return (
        <div>
            <strong>Borders:</strong>
            <ul className="list-disc list-inside">
                {borders.map(
                    (code, i) => (
                        <li key={i}>{code}</li>
                        /* {You can enhance this later with full country names }*/
                    )
                )}
            </ul>
        </div>
    );
};

export default Borders;
