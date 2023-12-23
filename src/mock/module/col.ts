import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/coledit/1",
    method: "get",
    response: {
      message: "Successfully get the media",
      data: {
        roomNumber: "51734",
        expenseName: "水電空調費",
        type: "代收",
        expenseAmount: "100",
        paymentMethod: "匯款",
        note: "10樓以下",
        bankName: "中國信託",
        bankAccount: "123456789",
        notices: [],
      },
    },
  },
  {
    url: "/api/coledit/2",
    method: "get",
    response: {
      message: "Successfully get the media",
      data: {
        roomNumber: "51734",
        expenseName: "管理費",
        type: "代付",
        expenseAmount: "100",
        paymentMethod: "現金",
        note: "10樓以下",
        bankName: "中國信託",
        bankAccount: "123456789",
        notices: [
          {
            visitDate: "2023-01-01",
            record: "看房子",
            remindDate: "2023-02-01",
            remind: "提醒",
          },
          {
            visitDate: "2023-01-01",
            record: "繳水電",
            remindDate: "2023-02-01",
            remind: "繳房租",
          },
          {
            visitDate: "2023-01-01",
            record: "繳水電",
            remindDate: "2023-02-01",
            remind: "繳房租",
          },
        ],
      },
    },
  },
  {
    url: "/api/coledit/3",
    method: "get",
    response: {
      message: "Successfully get the media",
      data: {
        roomNumber: "51734",
        expenseName: "第四台",
        type: "代收",
        expenseAmount: "100",
        paymentMethod: "現金",
        note: "10樓以下",
        bankName: "中國信託",
        bankAccount: "123456789",
        notices: [
          {
            visitDate: "2023-01-01",
            record: "看房子",
            remindDate: "2023-02-01",
            remind: "提醒",
          },
          {
            visitDate: "2023-01-01",
            record: "繳水電",
            remindDate: "2023-02-01",
            remind: "繳房租",
          },
          {
            visitDate: "2023-01-01",
            record: "看房子",
            remindDate: "2023-02-01",
            remind: "提醒",
          },
          {
            visitDate: "2023-01-01",
            record: "繳水電",
            remindDate: "2023-02-01",
            remind: "繳房租",
          },
        ],
      },
    },
  },
  {
    url: "/api/coledit/4",
    method: "get",
    response: {
      message: "Successfully get the media",
      data: {
        roomNumber: "51734",
        expenseName: "其他費用",
        type: "代付",
        expenseAmount: "100",
        paymentMethod: "現金",
        note: "10樓以下",
        bankName: "中國信託",
        bankAccount: "123456789",
        notices: [
          {
            visitDate: "2023-01-01",
            record: "看房子",
            remindDate: "2023-02-01",
            remind: "提醒",
          },
          {
            visitDate: "2023-01-01",
            record: "繳水電",
            remindDate: "2023-02-01",
            remind: "繳房租",
          },
        ],
      },
    },
  },
  {
    url: "/api/coledit",
    method: "post",
    response: {
      message: "Successfully update the media",
    },
  },
  {
    url: "/api/coledit/notices",
    method: "post",
    response: {
      message: "Successfully add the media",
    },
  },
  {
    url: "/api/coladd",
    method: "post",
    response: {
      message: "Successfully add the media",
    },
  },
  {
    url: "/api/coladd/notices",
    method: "post",
    response: {
      message: "Successfully add the media",
    },
  },
  {
    url: "/api/collection/list",
    method: "get",
    response: {
      message: "Successfully get the media",
      data: [
        {
          key: "1",
          name: "水電空調費",
          houseid: "1",
          type: "代收",
          amount: "1000",
          id: "1",
        },
        {
          key: "2",
          name: "管理費",
          houseid: "2",
          type: "代付",
          amount: "2000",
          id: "2",
        },
        {
          key: "3",
          name: "第四台",
          houseid: "3",
          type: "代收",
          amount: "3000",
          id: "3",
        },
        {
          key: "4",
          name: "其他費用",
          houseid: "4",
          type: "代付",
          amount: "4000",
          id: "4",
        },
      ],
    },
  },
] as MockMethod[];
