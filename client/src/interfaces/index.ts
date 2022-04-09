interface INameInputPropTypes {
  name: string;
  handleChangeName: (newName: string) => void;
}

interface IRoomInputPropTypes {
  room: string;
  handleChangeRoom: (newRoom: string) => void;
}

export type { INameInputPropTypes, IRoomInputPropTypes };
