import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/calender",
    method: "post",
    response: {
      message: "Successfully update the media",
      data: [
        {
          day: 8,
          events: [
            {
              content: "代收付款",
              id: "1",
              class: "Collection",
            },
            {
              content: "房屋",
              id: "2",
              class: "House",
            },
            // 添加其他同一天的事件
          ],
        },
        {
          day: 10,
          events: [
            {
              content: "代收付款",
              id: "3",
              class: "Collection",
            },
            {
              content: "房屋",
              id: "4",
              class: "House",
            },
          ],
        },
      ],
    },
  },
] as MockMethod[];
