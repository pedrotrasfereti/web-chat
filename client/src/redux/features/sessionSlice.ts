import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISessionState {
  name: string;
  roomId: string;
}

const initialState: ISessionState = {
  name: "",
  roomId: "",
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setRoomId: (state, action: PayloadAction<string>) => {
      state.roomId = action.payload;
    },
  },
});

export const { setName, setRoomId } = sessionSlice.actions;

export default sessionSlice.reducer;
