import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setName, setRoomId } from "../../redux/features/sessionSlice";
import { RootState } from "../../redux/store";

/* children */
import NameInput from "./NameInput";
import RoomInput from "./RoomInput";

function Join() {
  const dispatch = useDispatch();

  const name = useSelector((state: RootState) => state.session.name);
  const room = useSelector((state: RootState) => state.session.roomId);

  const handleChangeName = (newName: string) => {
    dispatch(setName(newName));
  };

  const handleChangeRoom = (newRoom: string) => {
    dispatch(setRoomId(newRoom));
  };

  return (
    <div className="JoinOuterContainer">
      <div className="JoinInnerContainer">
        <h1 className="Heading">Join Room</h1>

        <NameInput name={name} handleChangeName={handleChangeName} />
        <RoomInput room={room} handleChangeRoom={handleChangeRoom} />

        <Link
          onClick={(evt) => (!name || !room ? evt.preventDefault() : null)}
          to="/chat"
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
