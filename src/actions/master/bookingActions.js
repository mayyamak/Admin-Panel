import {fetch, loadInfo} from '../dynamicAction'

export const getAllBookings = () => {
  // return (dispatch) => {
  //   return dispatch(fetch(``, 'BOOKING'))
  // }
  return ({
    type: 'BOOKINGS_SUCCESS',
    payload: {
      data: [{
        id: 33,
        referenceId: 12,
        type: 'سه روزه',
        checkIn: '۹۷-۳-۲',
        checkOut: '۹۷-۳-۵',
        nightsCount: 3,
        status: 'رزرو شده',
      }, {
        id: 34,
        referenceId: 40,
        type: 'یک ماهه',
        checkIn: '۹۷-۲-۱۲',
        checkOut: '۹۷-۳-۱۲',
        nightsCount: 30,
        status: 'تخلیه شده',
      }]
    }
  })
}
