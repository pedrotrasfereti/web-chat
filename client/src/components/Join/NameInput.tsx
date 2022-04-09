import React from "react";

import { INameInputPropTypes } from "../../interfaces";

function NameInput({ name, handleChangeName }: INameInputPropTypes) {
  return (
    <div className="InputWrapper">
      <input
        type="text"
        name="name"
        id="name-input"
        placeholder="Your nickname"
        value={name}
        onChange={(evt) => handleChangeName(evt.target.value)}
        className="Input"
      />
    </div>
  );
}

export default NameInput;
