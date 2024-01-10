export type Collection = {
  collection_name: string;
  tenement_no: string;
  price: string;
  collection_type: string;
  collection_id: number;
};

export type FormData = {
  tenement_no: string;
  collection_id: string;
  collection_name: string;
  collection_type: string;
  price: string;
  payment: string;
  collection_remark: string;
  collection_date: string;
  remittance_bank: string;
  remittance_account: string;
  cus_remittance_bank: string;
  cus_remittance_account: string;
  collection_complete: string;
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
  user_name: string;
  user_email: string;
  status: string;
  user_id?: string;
  user_password?: string;
  isadmin?: string;
};

export type Calender = {
  day: number;
  events: Event[];
};

export type TenementList = {
  tenement_no: number;
  tenement_face: string;
  tenement_status: string;
  tenement_type: string;
  tenement_style: string;
  management_fee_bottom: number;
  management_floor_bottom: number;
  rent?: number;
  selling_price?: number;
  Total_rating?: number;
  inside_rating?: number;
  public_buliding?: number;
  tenement_floor?: number;
};
