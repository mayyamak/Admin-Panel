import ActionTypes from '../actions/ActionTypes'
import {getCount, getNewStateOnFailure} from '../utils/entities'
import { language, ln, dir } from '../utils/language'
import { isArrayOK } from '../utils/array'

export default masterEntities = (state = {}, action) => {
  let messageText = ''
  let messageType = ''
  let count = null
  let data = null
  let sentData = null
  console.log('ActionType master :', action.type);
  switch (action.type) {

    case ActionTypes.CITIES_REQUEST:
      return {...state, citisLoading: true}
    case ActionTypes.CITIES_SUCCESS:
      return {...state, data: action.payload.data, citisLoading: false, }

    case ActionTypes.BOOKINGS_REQUEST:
      return {...state, bookingsLoading: true}
    case ActionTypes.BOOKINGS_SUCCESS:
      return {...state, data: action.payload.data, bookingsLoading: false, }

    case ActionTypes.RESORTS_REQUEST:
      return {...state, resortsLoading: true}
    case ActionTypes.RESORTS_SUCCESS:
      return {...state, data: action.payload.data, resortsLoading: false, }

    case ActionTypes.REVIEWS_REQUEST:
      return {...state, reviewsLoading: true}
    case ActionTypes.REVIEWS_SUCCESS:
      return {...state, data: action.payload.data, reviewsLoading: false, }

    case ActionTypes.TRANSACTIONS_REQUEST:
      return {...state, transactionsLoading: true}
    case ActionTypes.TRANSACTIONS_SUCCESS:
      return {...state, data: action.payload.data, transactionsLoading: false, }

    case ActionTypes.USERS_REQUEST:
      return {...state, usersLoading: true, }
    case ActionTypes.USERS_SUCCESS:
      return {...state, data: action.payload.data, usersLoading: false,
        // count: getCount(action.payload.data, action.payload.range),
      }

    case ActionTypes.INVOICES_REQUEST:
      return {...state, invoicesLoading: true}
    case ActionTypes.INVOICES_SUCCESS:
      return {...state, data: action.payload.data, invoicesLoading: false,}
        // count: getCount(action.payload.data, action.payload.range),}

    case ActionTypes.USER_REQUEST:
      return {...state, userLoading: true,}
    case ActionTypes.USER_SUCCESS:
      return {...state, userLoading: false, userData: action.payload.data}


    case ActionTypes.USERINVOICES_REQUEST:
      return {...state, userInvoicesLoading: true, }
    case ActionTypes.USERINVOICES_SUCCESS:
      // return {...state, userInvoicesLoading: false, userInvoices: action.payload}
      return {...state, userInvoicesData: action.payload.data, userInvoicesLoading: false,
        userInvoicesCount: getCount(action.payload.data, action.payload.range),}

    case ActionTypes.USERTRANSACTIONS_REQUEST:
      return {...state, userTransactionLoading: true,}
    case ActionTypes.USERTRANSACTIONS_SUCCESS:
      return {...state, userTransactionsData: action.payload.data, userTransactionLoading: false,
        userTransactionsCount: getCount(action.payload.data, action.payload.range),}

    case ActionTypes.LOGIN_REQUEST:
      return {...state, loginLoading: true, isAdminAuthenticated: false}
    case ActionTypes.LOGIN_SUCCESS:
      return {...state, loginData: action.payload, loginLoading: false, isAdminAuthenticated: true}

    case ActionTypes.LOCATION_REQUEST:
      return {...state, locationLoading: true}
    case ActionTypes.LOCATION_SUCCESS:
      return {...state, locations: action.payload, locationLoading: false,}

    case ActionTypes.CHANGEPASS_REQUEST:
      return {...state, changePasswordLoading: true}
    case ActionTypes.CHANGEPASS_SUCCESS:
      return {...state, changePasswordLoading: false,
        messageText: 'changePasswordSuccess', messageType: 'success',
      }


    case ActionTypes.UPDATEINVOICE_REQUEST:
      return {...state, updateinvoiceLoading: true}
    case ActionTypes.UPDATEINVOICE_SUCCESS:
      return {...state, updateinvoiceLoading: false,
        messageType: 'success', messageText: 'updateInvoiceSuccess',
      }
    case ActionTypes.LOGIN_FAILURE:
      return {...state, loginLoading: false, isAdminAuthenticated: false}

    case ActionTypes.USERTRANSACTIONS_FAILURE:
    case ActionTypes.LOCATION_FAILURE:
    case ActionTypes.INVOICES_FAILURE:
    case ActionTypes.UPDATEINVOICE_FAILURE:
    case ActionTypes.UPDATEBALANCE_FAILURE:
    case ActionTypes.USERS_FAILURE:
    case ActionTypes.USER_FAILURE:
    case ActionTypes.USERINVOICES_FAILURE:
    case ActionTypes.USERUSERS_FAILURE:
    case ActionTypes.CHANGEPASS_FAILURE:

      const {newState, errorMessage} = getNewStateOnFailure(state, action.payload, false)
      return {...newState, messageText: errorMessage, messageType: 'error', loadingId: 0,
        locationLoading: false,
        userLoading: false,
        usersLoading: false,
        invoicesLoading: false,
        userInvoicesLoading: false,
        changePasswordLoading: false,
        loginLoading: false,
      }


          case 'SHOW_MESSAGE':
            console.log('SHOW_MESSAGE', { ...state, messageText: action.messageText, messageType: action.messageType});
            return { ...state, messageText: action.messageText, messageType: action.messageType}
          case 'MESSAGE_CLEAR':
            return { ...state, messageText: '', }

          case 'DATA_RESERVE':
            return { ...state, reservedData: state.data, reservedCount: state.count}
          case 'DATA_RESET':
            return { ...state, data: state.reservedData, count: state.reservedCount}





    case 'ADD_LOCATION_BOX':
      return { ...state, locationsCount: state.locationsCount? state.locationsCount + 1: 1}
    case '@@router/LOCATION_CHANGE':
      return {...state, user: null, data: null, count:null,
        invoiceData: null, userLoading: null,
        userTransactionsData: null, userTransactionsCount: null,
        userInvoicesData: null, userInvoicesCount: null,
        userOrdersData: null, userOrdersCount: null,
       }
    case 'SHOW_MESSAGE':
      console.log('SHOW_MESSAGE', { ...state, messageText: action.messageText, messageType: action.messageType});
      return { ...state, messageText: action.messageText, messageType: action.messageType}
    case 'MESSAGE_CLEAR':
      return { ...state, messageText: '', }

    case 'USER_CLEAR':
      return { ...state, userId: null, }
    case 'DATA_RESERVE':
      return { ...state, reservedData: state.data, reservedCount: state.count}
    case 'DATA_RESET':
      return { ...state, data: state.reservedData, count: state.reservedCount}
    case 'CHANGE_LANG':
      console.log('CHANGE_LANG');
      localStorage.setItem('language', action.language)
      return { ...state, language: action.language}
    case 'CHANGE_STEP':
    console.log('changeStep action2', state.activeStep);
      return { ...state, activeStep: Number(state.activeStep)? state.activeStep + 1 : 2 }

    case 'TOGGLE_PAGE':
      console.log('reducer TOGGLE_PAGE ', state.toggledPage, !state.toggledPage)
      return { ...state, toggledPage: !state.toggledPage}

    default:
    console.log('shit', action.type);
      return state
  }
}
