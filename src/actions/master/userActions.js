import { fetch, loadInfo } from '../dynamicAction'
import {listConstants} from '../../utils/list'

const {pageNumber, pageSize, sortColumn, isAscending, } = listConstants

export const getAllUsers = (pageNumber, pageSize, sortColumn, isDescending, searchParams) => {
  let endpoint = `/admin/users`
  return loadInfo( endpoint,  'USERS')
}

export const loadUser = (id) => {
  let endpoint = `/profile/info`
  return loadInfo( endpoint,  'USER')
}

export const loadCurrentUser = () => {
  let endpoint = `/profile/info`
  return loadInfo( endpoint,  'USER')
  // return {
  //   type: 'USER_SUCCESS',
  //   payload: {
  //     data: [{
  //       id: 1,
  //       firstname: 'مریم',
  //       lastname: 'مختاری'
  //     }]
  //   }
  // }
}
