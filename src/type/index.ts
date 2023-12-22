export type Collection = {
  key: string;
  name: string;
  houseid: string;
  amount: string;
  type: string;
  id: string;
  data?: {
    key: string;
    name: string;
    houseid: string;
    amount: string;
    type: string;
    id: string;
  }[];
};
