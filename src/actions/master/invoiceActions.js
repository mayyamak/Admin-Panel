import {fetch, loadInfo} from '../dynamicAction'

export const getAllInvoices = () => {
  // return (dispatch) => {
  //   return dispatch(fetch(``, 'INVOICES'))
  // }
  return ({
    type: 'INVOICES_SUCCESS',
    payload: {
      data: [{
        id: 33,
        amount: 300000,
        status: 'پرداخت شده',
        createdDate: '۹۷-۱۱-۱۱',
      }, {
        id: 34,
        amount: 400000,
        status: 'پیش‌فاکتور',
        createdDate: '۹۷-۱-۱',
      }]
    }
  })
}
