export type Collection = {
  name: string;
  tenement_id: string;
  price: string;
  type: string;
  collection_id: string;
};



export type FormData = {
  tenement_id: string;
  collection_id: string;
  collection_name: string;
  type: string;
  price: string;
  payment: string;
  collection_remark: string;
  remittance_bank: string;
  remittance_account: string;
  notices?: NoticeData[];
};

export type NoticeData = {
  id: string;
  visitDate: string;
  record: string;
  remindDate: string;
  remind: string;
  isNew: boolean;
};

export type User = {
  key?: string;
  name: string;
  email: string;
  isactive: string;
  id?: string;
  password?: string;
  isadmin?: string;
};

export type Calender = {
  day: number;
  events: Event[];
};
