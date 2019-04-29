import {fetch, loadInfo} from '../dynamicAction'

export const getAllResorts = () => {
  // return (dispatch) => {
  //   return dispatch(fetch(``, 'RESORTS'))
  // }
  return ({
    type: 'RESORTS_SUCCESS',
    payload: {
      data: [{
        id: 33,
        name: 'خانه مادربزرگ',
        city: 'نوشهر',
        type: 'ویلا',
        status: 'برتر',
      }, {
        id: 34,
        name: 'خانه زیبا',
        city: 'اصفهان',
        type: 'ویلا',
        status: 'برتر',
      }]
    }
  })
}
