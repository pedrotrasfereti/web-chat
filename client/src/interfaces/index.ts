interface INameInputPropTypes {
  name: string;
  handleChangeName: (newName: string) => void;
}

interface IRoomInputPropTypes {
  room: string;
  handleChangeRoom: (newRoom: string) => void;
}

interface IChatSessionPropTypes {
  name: string;
  room: string;
}

export type { INameInputPropTypes, IRoomInputPropTypes, IChatSessionPropTypes };
