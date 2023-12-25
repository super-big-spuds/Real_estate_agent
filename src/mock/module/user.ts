import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/users",
    method: "get",
    response: {
      message: "Successfully get the media",
      data: [
        {
          user_name: "王小明",
          user_email: "User1@gmail.com",
          isactive: "是",
          id: "1",
        },
        {
          user_name: "王大明",
          user_email: "User2@gmail.com",
          isactive: "是",
          id: "2",
        },
        {
          user_name: "王中明",
          user_email: "User3@gmail.com",
          isactive: "否",
          id: "3",
        },
        {
          user_name: "王營明",
          user_email: "User4@gmail.com",
          isactive: "是",
          id: "4",
        },
      ],
    },
  },
  {
    url: "/api/user",
    method: "post",
    response: {
      message: "Successfully add the media",
    },
  },
  {
    url: "/api/user/:userid",
    method: "put",
    response: {
      message: "Successfully update the media",
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
    url: "/api/user/1",
    method: "get",
    response: {
      message: "Successfully get the media",
      data: {
        user_name: "王小明",
        user_email: "User1@gmail.com",
        isactive: "是",
        user_password: "123456",
        id: "1",
        isadmin: "否",
      },
    },
  },
  {
    url: "/api/user/2",
    method: "get",
    response: {
      message: "Successfully get the media",
      data: {
        user_name: "王大明",
        user_email: "User2@gmail.com",
        isactive: "是",
        user_password: "123456",
        id: "2",
        isadmin: "否",
      },
    },
  },
  {
    url: "/api/user/3",
    method: "get",
    response: {
      message: "Successfully get the media",
      data: {
        user_name: "王中明",
        user_email: "User3@gmail.com",
        user_password: "123456",
        isactive: "否",
        id: "3",
        isadmin: "否",
      },
    },
  },
  {
    url: "/api/user/4",
    method: "get",
    response: {
      message: "Successfully get the media",
      data: {
        user_name: "王營明",
        user_email: "User4@gmail.com",
        user_password: "123456",
        isactive: "是",
        id: "4",
        isadmin: "否",
      },
    },
  },
  {
    url: "/api/user/:id",
    method: "delete",
    response: {
      message: "Successfully delete the media",
    },
  },
] as MockMethod[];
