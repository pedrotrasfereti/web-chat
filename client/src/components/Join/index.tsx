import React, { useState } from "react";
import { Link } from "react-router-dom";

/* children */
import NameInput from "./NameInput";
import RoomInput from "./RoomInput";

function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleChangeName = (newName: string) => setName(newName);
  const handleChangeRoom = (newRoom: string) => setRoom(newRoom);

  return (
    <div className="JoinOuterContainer">
      <div className="JoinInnerContainer">
        <h1 className="Heading">Join Room</h1>

        <NameInput name={name} handleChangeName={handleChangeName} />
        <RoomInput room={room} handleChangeRoom={handleChangeRoom} />

        <Link
          onClick={(evt) => (!name || !room ? evt.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button type="submit" className="SubmitButton">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
