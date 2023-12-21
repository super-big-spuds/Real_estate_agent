import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/coledit/1',
    method: 'get',
    response: {
      message: 'Successfully get the media',
      data: {
        roomNumber: '51734',
        expenseName: '水費',
        expenseAmount: '100',
        paymentMethod: '現金',
        note: '10樓以下',
        bankName: '中國信託',
        bankAccount: '123456789',
        notices: [
          {
            visitDate: '2023-01-01',
            record: '看房子',
            remindDate: '2023-02-01',
            remind: '提醒',
          },
        
        ],
      }
    }
  },
  {
    url: '/api/coledit/2',
    method: 'get',
    response: {
      message: 'Successfully get the media',
      data: {
        roomNumber: '51734',
        expenseName: '水費',
        expenseAmount: '100',
        paymentMethod: '現金',
        note: '10樓以下',
        bankName: '中國信託',
        bankAccount: '123456789',
        notices: [
          {
            visitDate: '2023-01-01',
            record: '看房子',
            remindDate: '2023-02-01',
            remind: '提醒',
          },
          {
            visitDate: '2023-01-01',
            record: '繳水電',
            remindDate: '2023-02-01',
            remind: '繳房租',
          },
          {
            visitDate: '2023-01-01',
            record: '繳水電',
            remindDate: '2023-02-01',
            remind: '繳房租',
          },
        ],
      }
    }
  },
  {
    url: '/api/coledit/3',
    method: 'get',
    response: {
      message: 'Successfully get the media',
      data: {
        roomNumber: '51734',
        expenseName: '水費',
        expenseAmount: '100',
        paymentMethod: '現金',
        note: '10樓以下',
        bankName: '中國信託',
        bankAccount: '123456789',
        notices: [
          {
            visitDate: '2023-01-01',
            record: '看房子',
            remindDate: '2023-02-01',
            remind: '提醒',
          },
          {
            visitDate: '2023-01-01',
            record: '繳水電',
            remindDate: '2023-02-01',
            remind: '繳房租',
          },
          {
            visitDate: '2023-01-01',
            record: '看房子',
            remindDate: '2023-02-01',
            remind: '提醒',
          },
          {
            visitDate: '2023-01-01',
            record: '繳水電',
            remindDate: '2023-02-01',
            remind: '繳房租',
          },
        ],
      }
    }
  },
  {
    url: '/api/coledit/4',
    method: 'get',
    response: {
      message: 'Successfully get the media',
      data: {
        roomNumber: '51734',
        expenseName: '水費',
        expenseAmount: '100',
        paymentMethod: '現金',
        note: '10樓以下',
        bankName: '中國信託',
        bankAccount: '123456789',
        notices: [
          {
            visitDate: '2023-01-01',
            record: '看房子',
            remindDate: '2023-02-01',
            remind: '提醒',
          },
          {
            visitDate: '2023-01-01',
            record: '繳水電',
            remindDate: '2023-02-01',
            remind: '繳房租',
          },
        ],
      }
    }
  },
  {
    url: '/api/coledit',
    method: 'post',
    response: {
      message: 'Successfully update the media',
    }
  },
  {
    url: '/api/coledit/notices',
    method: 'post',
    response: {
      message: 'Successfully add the media',
    }
  }
] as MockMethod[]