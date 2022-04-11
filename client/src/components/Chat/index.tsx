import React, { useEffect } from "react";

import io from "socket.io-client";

import { IChatSessionPropTypes } from "../../interfaces";

const endpoint = "http://localhost:3001";

const socket = io(endpoint);

function Chat({ name, room }: IChatSessionPropTypes) {
  useEffect(() => {
    // mount
    socket.emit("join", { name, room });

    // unmount
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [name, room]);

  return (
    <div>
      <h1>Chat</h1>
      <p>Name: {name}</p>
      <p>Room ID: {room}</p>
    </div>
  );
}

export default Chat;
