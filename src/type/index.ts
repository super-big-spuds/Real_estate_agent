export type Collection = {
  key: string;
  name: string;
  houseid: string;
  amount: string;
  type: string;
  id: string;
};

export type CollectionAdd = {
  key: string;
  name: string;
  houseid: string;
  amount: string;
  type: string;
  id: string;
};

export type FormData = {
  roomNumber: string;
  expenseName: string;
  type: string;
  expenseAmount: string;
  paymentMethod: string;
  note: string;
  bankName: string;
  bankAccount: string;
  notices?: NoticeData[];
};

export type NoticeData = {
  visitDate: string;
  record: string;
  remindDate: string;
  remind: string;
};

export type User = {
  key?: string;
  name: string;
  email: string;
  isactive: string;
  id?: string;
  password?: string;
};
