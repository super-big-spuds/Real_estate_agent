import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/collection/1",
    method: "get",
    response: {
      message: "Successfully get the media",
      data: {
        tenement_id: "51734",
        collection_name: "水電空調費",
        type: "代收",
        price: "100",
        payment: "匯款",
        collection_remark: "10樓以下",
        remittance_bank: "中國信託",
        remittance_account: "123456789",
        notices: [],
      },
    },
  },
  {
    url: "/api/collection/2",
    method: "get",
    response: {
      message: "Successfully get the media",
      data: {
        tenement_id: "51734",
        collection_name: "管理費",
        type: "代付",
        price: "100",
        payment: "現金",
        collection_remark: "10樓以下",
        remittance_bank: "中國信託",
        remittance_account: "123456789",
        notices: [
          {
            id: "1",
            visitDate: "2023-01-01",
            record: "看房子",
            remindDate: "2023-02-01",
            remind: "提醒",
          },
          {
            id: "2",
            visitDate: "2023-01-01",
            record: "繳水電",
            remindDate: "2023-02-01",
            remind: "繳房租",
          },
          {
            id: "3",
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
    url: "/api/collection/3",
    method: "get",
    response: {
      message: "Successfully get the media",
      data: {
        tenement_id: "51734",
        collection_name: "第四台",
        type: "代收",
        price: "100",
        payment: "現金",
        collection_remark: "10樓以下",
        remittance_bank: "中國信託",
        remittance_account: "123456789",
        notices: [
          {
            id: "5",
            visitDate: "2023-01-01",
            record: "看房子",
            remindDate: "2023-02-01",
            remind: "提醒",
          },
          {
            id: "6",
            visitDate: "2023-01-01",
            record: "繳水電",
            remindDate: "2023-02-01",
            remind: "繳房租",
          },
          {
            id:"7",
            visitDate: "2023-01-01",
            record: "看房子",
            remindDate: "2023-02-01",
            remind: "提醒",
          },
          {
            id:"8",
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
    url: "/api/collection/4",
    method: "get",
    response: {
      message: "Successfully get the media",
      data: {
        tenement_id: "51734",
        collection_name: "其他費用",
        type: "代付",
        price: "100",
        payment: "現金",
        collection_remark: "10樓以下",
        remittance_bank: "中國信託",
        remittance_account: "123456789",
        notices: [
          {
            id:"9",
            visitDate: "2023-01-01",
            record: "看房子",
            remindDate: "2023-02-01",
            remind: "提醒",
          },
          {
            id:"10",
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
    url: "/api/collection",
    method: "post",
    response: {
      message: "Successfully update the media",
    },
  },
  {
    url: "/api/collection/notices",
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
          tenement_id: "1",
          type: "代收",
          price: "1000",
          id: "1",
        },
        {
          key: "2",
          name: "管理費",
          tenement_id: "2",
          type: "代付",
          price: "2000",
          id: "2",
        },
        {
          key: "3",
          name: "第四台",
          tenement_id: "3",
          type: "代收",
          price: "3000",
          id: "3",
        },
        {
          key: "4",
          name: "其他費用",
          tenement_id: "4",
          type: "代付",
          price: "4000",
          id: "4",
        },
      ],
    },
  },
] as MockMethod[];
