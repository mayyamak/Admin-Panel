import { fetch, loadInfo } from '../dynamicAction'
import baseUrl from '../../utils/baseurl'

export const loginAdmin = (username, password) => {
  console.log('login', username, password, baseUrl);
  return (dispatch, getState) => {
    return dispatch(fetch(`/admin/login`, 'LOGIN', 'POST', {username, password}))
  }
}
