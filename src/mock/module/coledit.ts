import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/coledit',
    method: 'get',
    response: {
      message: 'Successfully update the media',
      data: {
        "id": 1,
        "title": "test",
        "description": "test",
        "date": "2021-08-04",
        "remindDate": "2021-08-04",
        "notices": [
          {
            "id": 1,
            "title": "test",
            "description": "test",
            "date": "2021-08-04",
            "remindDate": "2021-08-04"
          }
        ]
      }
    }
  }
] as MockMethod[]