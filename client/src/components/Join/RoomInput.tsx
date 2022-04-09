import React from "react";
import { IRoomInputPropTypes } from "../../interfaces";

function RoomInput({ room, handleChangeRoom }: IRoomInputPropTypes) {
  return (
    <div className="InputWrapper">
      <input
        type="text"
        name="room"
        id="room-input"
        placeholder="Room ID"
        value={room}
        onChange={(evt) => handleChangeRoom(evt.target.value)}
        className="Input"
      />
    </div>
  );
}

export default RoomInput;
