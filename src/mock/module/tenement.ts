import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/tenements",
    method: "get",
    response: {
      message: "Successfully update the media",
      data: [
        {
          tenement_no: 54321,
          tenement_face: "海景",
          tenement_status: "未成交",
          tenement_type: "可售",
          tenement_style: "辦公室",
          management_fee_bottom: 100,
          management_floor_bottom: 7,
        },
        {
          tenement_no: 54322,
          tenement_face: "中庭",
          tenement_status: "已成交",
          tenement_type: "可租",
          tenement_style: "店面",
          management_fee_bottom: 120,
          management_floor_bottom: 11,
        },
        {
          tenement_no: 54323,
          tenement_face: "三多路",
          tenement_status: "已退租下架",
          tenement_type: "開發追蹤",
          tenement_style: "套房",
          management_fee_bottom: 150,
          management_floor_bottom: 3,
        },
        {
          tenement_no: 54323,
          tenement_face: "三多路",
          tenement_status: "過戶完成下架",
          tenement_type: "行銷追蹤",
          tenement_style: "套房",
          management_fee_bottom: 150,
          management_floor_bottom: 3,
        },
      ],
    },
  },
] as MockMethod[];
