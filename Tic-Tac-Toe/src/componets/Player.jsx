import { useState } from "react";

export default function Player({ initialname, symbol }) {
  const [playerName, setPlayerName] = useState(initialname);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  let editplayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editplayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  let btnCaption = "Save";

  return (
    <li>
      <span className="players">
        {editplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
