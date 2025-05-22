export default function Log({ turns }) {
    return <ol id="log">
        {turns.map(({ square: { row, col }, player }) => <li key={`${row},${col}`}>{player} selected {row + 1},{col + 1}</li>)}
    </ol>;
}