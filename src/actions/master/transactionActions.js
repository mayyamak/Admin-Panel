import {fetch, loadInfo} from '../dynamicAction'

export const getAllTransactions = () => {
  // return (dispatch) => {
  //   return dispatch(fetch(``, 'TRANSACTIONS'))
  // }
  return ({
    type: 'TRANSACTIONS_SUCCESS',
    payload: {
      data: [{
        id: 33,
        referenceId: 1,
        amount: 200000,
        status: 'پرداخت شده',
        bookingInfo: 'پرداخت از کیف پول',
        createdDate: '۹۷-۵-۵',
      }, {
        id: 34,
        referenceId: 2,
        amount: 350000,
        status: 'واریز شده',
        bookingInfo: 'کارت به کارت',
        createdDate: '۹۷-۳-۳',
      }]
    }
  })
}
