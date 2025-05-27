import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(isEditing => !isEditing);
    }
    // React scheduling state updates. State updates are not performed instantly
    // but at some time in the future
    // In most cases, those state updates still are executed almoust instantly.
    // If we provide func inside of changeState function, in arg of this fun current
    // the latest value comes.

    function handleChange(event) {
        setPlayerName(event.target.value);
        onChangeName(symbol, event.target.value);
    }
    
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        editablePlayerName = <input type="text" required value = {playerName} onChange={handleChange} />
    }

    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
              <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </span>
        </li>
    );
}