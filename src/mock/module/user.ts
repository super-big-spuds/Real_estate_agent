import { MockMethod } from "vite-plugin-mock";

export default [
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
  {
    url: "/api/user/add",
    method: "post",
    response: {
      message: "Successfully add the media",
    },
  },
  {
    url: "/api/user/edit",
    method: "post",
    response: {
      message: "Successfully edit the media",
    },
  },
  {
    url: "/api/user/edit/1",
    method: "get",
    response: {
      message: "Successfully get the media",
      data: {
        key: "1",
        name: "王小明",
        email: "User1@gmail.com",
        isactive: "是",
        password: "123456",
        id: "1",
      },
    },
  },
  {
    url: "/api/user/edit/2",
    method: "get",
    response: {
      message: "Successfully get the media",
      data: {
        key: "2",
        name: "王大明",
        email: "User2@gmail.com",
        isactive: "是",
        password: "123456",
        id: "2",
      },
    },
  },
  {
    url: "/api/user/edit/3",
    method: "get",
    response: {
      message: "Successfully get the media",
      data: {
        key: "3",
        name: "王中明",
        email: "User3@gmail.com",
        password: "123456",
        isactive: "否",
        id: "3",
      },
    },
  },
  {
    url: "/api/user/edit/4",
    method: "get",
    response: {
      message: "Successfully get the media",
      data: {
        key: "4",
        name: "王營明",
        email: "User4@gmail.com",
        password: "123456",
        isactive: "是",
        id: "4",
      },
    },
  },
] as MockMethod[];