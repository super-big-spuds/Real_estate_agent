import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/calender/:year/:month",
    method: "get",
    response: {
      message: "Successfully update the media",
      data: [
        {
          day: 8,
          events: [
            {
              content: "代收付款",
              id: "1",
              class: "collection",
            },
            {
              content: "租房",
              id: "2",
              class: "rent",
            },
          ],
        },
        {
          day: 10,
          events: [
            {
              content: "售房",
              id: "3",
              class: "sell",
            },
            {
              content: "開發追蹤",
              id: "4",
              class: "develop",
            },
            {
              content: "行銷追蹤",
              id: "5",
              class: "market",
            },
          ],
        },
      ],
    },
  },
] as MockMethod[];
