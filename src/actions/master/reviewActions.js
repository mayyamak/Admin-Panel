import {fetch, loadInfo} from '../dynamicAction'

export const getAllReviews = () => {
  // return (dispatch) => {
  //   return dispatch(fetch(``, 'REVIEWS'))
  // }
  return ({
    type: 'REVIEWS_SUCCESS',
    payload: {
      data: [{
        id: 33,
        createdDate: '۹۷-۱۲-۱۲',
        rate: 4,
        reviewer: 'علی',
        target: 'خونه مادربزرگ',
        comment: 'خیلی خوب',
        status: 'در انتظار تایید',
      }, {
        id: 34,
        createdDate: '۹۷-۱۰-۱۰',
        rate: 5,
        reviewer: 'محسن',
        target: 'خانه زیبا',
        comment: 'کوچک بود',
        status: 'تایید شده',
      }]
    }
  })
}
