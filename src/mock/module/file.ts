import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/aaa",
    method: "get",
    response: {
      message: "Successfully update the media",
      data: {
        name: "http://localhost:5173/public/default-thumb.png",
      },
    },
  },
  {
    url: "/api/user/list",
    method: "get",
    response: {
      message: "Successfully get the media",
      data: [
        {
          key: "1",
          name: "王小明",
          email: "User1@gmail.com",
          isactive: "是",
          id: "1",
        },
        {
          key: "2",
          name: "王大明",
          email: "User2@gmail.com",
          isactive: "是",
          id: "2",
        },
        {
          key: "3",
          name: "王中明",
          email: "User3@gmail.com",
          isactive: "否",
          id: "3",
        },
        {
          key: "4",
          name: "王營明",
          email: "User4@gmail.com",
          isactive: "是",
          id: "4",
        },
      ],
    },
  },
] as MockMethod[];
