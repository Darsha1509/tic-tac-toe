import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(isEditing => !isEditing);
    }
    // React scheduling state updates. State updates are not performed instantly
    // but at some time in the future
    // In most cases, those state updates still are executed almoust instantly.
    // If we provide func inside of changeState function, in arg of this fun current
    // the latest value comes.

    let playerName = <span className="player-name">{name}</span>;
    if (isEditing) {
        playerName = <input type="text" required value = {name} />
    }

    return(
        <li>
            <span className="player">
                {playerName}
              <span className="player-symbol">{symbol}</span>
              <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </span>
        </li>
    );
}