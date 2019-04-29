import {fetch, loadInfo} from '../dynamicAction'

export const loadProvinces = () => {
  return (dispatch) => {
    return dispatch(fetch(``, 'PROVINCES'))
  }
}

export const getAllCities = () => {
  // return (dispatch) => {
  //   return dispatch(fetch(``, 'CITIES'))
    return ({
      type: 'CITIES_SUCCESS',
      payload: {
        data: [{
          id: 33,
          name: 'تهران',
          province: 'تهران',
        }, {
          id: 34,
          name: 'رشت',
          province: 'گیلان',
        }]
      }
    })
}
