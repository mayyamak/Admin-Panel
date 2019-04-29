import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router'
import {
  loadUser, loadCurrentUser, changePassword,
  loadUserTransactions, loadUserOrders, updateBalance, loadUserInvoices,
  loadUserUsers, loginAsClient,
  showMessage,
  next, previous, setPage, changeSort, changePageSize, resetList, first, last, setSearchParams, clearSearchParams,

} from '../../../actions'
import UserTabs from '../../components/user/UserTabs'
import UserTransactions from '../../components/user/UserTransactions'
import UserOrders from '../../components/user/UserOrders'
import UserInvoices from '../../components/user/UserInvoices'
import UserInformation from '../../components/user/UserInformation'
import UserPassword from '../../components/user/UserPassword'
import Loading from '../../components/general/Loading'
import { getNormalizedDigit, } from '../../../utils/normalize'
import { clearFormGeneratorModal, } from '../../../utils/form'
import { siteConfig } from '../../../utils/siteConfig'
import { baseRoute } from '../../../utils/route'
import { isArrayOK } from '../../../utils/array'
import {language, ln, dir} from '../../../utils/language'


class UserPage extends Component {
  componentDidMount() {
    this.preloadData()
  }
  async preloadData() {
    await this.props.loadCurrentUser()
    this.props.loadUser(this.props.userId)
  }
  componentDidUpdate(nextProps) {
    if (this.props.userId && nextProps.userId && this.props.userId != nextProps.userId) {
      this.preloadData()
    }
  }
  render() {
    const {
      messageText, messageType,
      userLoading, userId, userData,
      userTransactionsData, userTransactionsCount,
      userInvoicesData, userInvoicesCount,
      userOrdersData, userOrdersCount, userOrdersLoading,
      userTransactionLoading,
      dispatch, loadUserTransactions, loadUserOrders, updateBalanceLoading, updateBalance,
      changePassword,
      isLoginAsClientSuccess, changePasswordLoading,
      userDocuments, documentsLoading,
      userInvoicesLoading, loadUserInvoices,
      loadUserUsers, loginAsClient, loginAsClientLoading,
      userUsersLoading, userUsersData, userUsersCount,
      showMessage,
      pageNumber, pageSize, sortColumn, isAscending, searchParams,
      next, previous, setPage, changeSort, changePageSize, resetList, first, last, setSearchParams, clearSearchParams,
    } = this.props
    console.log('UserPage props', this.props);
    let user = userLoading==false? (this.props.user?this.props.user: userData?[userData]:undefined): undefined
    const isOwnPage = this.props.user && isArrayOK(this.props.user) && userData && this.props.user[0].id == userData.id
    const userNameStyle = {[dir('reverseAlign')]: 50}
    const userIconStyle = {[dir('reverseAlign')]: 10}

    const listHandlers = {next, previous, setPage, changeSort, changePageSize,
      resetList, first, last, setSearchParams, clearSearchParams,
    }
    const baseColor = siteConfig[siteConfig.key].headerBackground

    const tabsHandlers = {loadUserTransactions,
      loadUserOrders, loadUserInvoices,
      loadUserUsers, loginAsClient,
    }
    const tabsProps = {tabsHandlers, baseColor,
      pageNumber, pageSize, sortColumn, isAscending, searchParams, userId, isOwnPage,
    }

    const userInformationProps = {user, userLoading, baseColor}

    const transactionProps = {
      userTransactionLoading, userTransactionsData, userTransactionsCount,
      userId, dispatch,
      updateBalanceLoading, user,
      handlers: { updateBalance, },
      listHandlers: { ...listHandlers, loadData: loadUser },
      pageNumber, pageSize, sortColumn, isAscending, searchParams,
    }

    const userOrdersProps = {
      userOrdersLoading, userOrdersData, userOrdersCount,
      userId, dispatch,
      listHandlers: { ...listHandlers, loadData: loadUserOrders },
      pageNumber, pageSize, sortColumn, isAscending, searchParams,
    }

    const userInvoicesProps = {
      userInvoicesLoading, userInvoicesData, userInvoicesCount, userId, dispatch,
      listHandlers: { ...listHandlers, loadData: loadUserInvoices },
      pageNumber, pageSize, sortColumn, isAscending, searchParams,
    }
    const userPasswordProps = {
      messageText, messageType,
      changePasswordLoading,
      handlers: {changePassword, showMessage,}
    }
    return (
      <div>
        <section className="content-header">
          <h1>
            {ln('userInformation')}
            &nbsp;
              <small>{ln('controlPanel')}</small>
          </h1>
          <ol className="breadcrumb">
            <li><Link to={`/${baseRoute.master}`}>{ln('home')}</Link></li>
            <li><Link to={`/${baseRoute.master}/users`}>{ln('users')}</Link></li>
            <li className="active">{ln('userData')}</li>
          </ol>
        </section>
        <section className="content">

          <div className="row">

            <div className="col-md-12">
              <div className="box user-profile-box box-widget">

                <div className="box user-profile-box box-widget widget-user-2">

                  <div className="box-footer no-padding" style={{ background: '#fafafa' }}>

                    {userLoading ?
                      <Loading />
                      :
                      isArrayOK(user) &&
                      <div className="tabs">
                        <span className="lg-show en-for-fa">
                          <span className={`user-name text-user-${baseColor}`}
                            style={userNameStyle}>
                            {user && user[0].username}
                          </span>
                          <img className="user-icon user-img"
                            style={userIconStyle}
                            src="/design/dist/img/mi.jpeg" />
                        </span>

                        <UserTabs {...tabsProps} />

                        { user &&
                          <div className="tab-content user-tab-content clearfix">
                            <UserInformation {...userInformationProps} />
                            <UserTransactions {...transactionProps} />
                            <UserOrders {...userOrdersProps} />
                            <UserInvoices {...userInvoicesProps} />
                            <UserPassword {...userPasswordProps} />
                          </div>
                        }
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let { userId } = ownProps.params
  const {
    userLoading, user,
    userTransactionsData, userTransactionsCount,
    userInvoicesData, userInvoicesCount,
    userOrdersData, userOrdersCount,
    userTransactionLoading, userOrdersLoading,
    updateBalanceLoading,
    userInvoicesLoading,
    userUsersLoading, userUsersData, userUsersCount,
    userDocuments, documentsLoading, changePasswordLoading,
    isLoginAsClientSuccess, loginAsClientLoading,
  } = state.masterEntities
  const {userData, userDataLoading,
    // messageText, messageType
  } = state.generalEntities
  const entities = baseRoute.isBusiness? state.businessEntities: state.masterEntities
  const { messageText, messageType } = entities
  if (userData && !userId) {
    userId = userData.id
  }
  const {pageNumber, pageSize, sortColumn, isAscending, searchParams, } = state.list
  return {
    messageText, messageType,
    userLoading,
    user, userId,
    userTransactionsData, userTransactionsCount,
    userInvoicesData, userInvoicesCount,
    userOrdersData, userOrdersCount,
    userTransactionLoading, userOrdersLoading,
    updateBalanceLoading, userData, userDocuments, documentsLoading,
    userInvoicesLoading, loginAsClientLoading,
    isLoginAsClientSuccess, changePasswordLoading,
    pageNumber, pageSize, sortColumn, isAscending, searchParams,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch, ...bindActionCreators({
      loadUser, loadCurrentUser,
      loadUserTransactions, loadUserOrders, updateBalance, loadUserInvoices,
      loadUserUsers, loginAsClient, changePassword,
      showMessage,
      next, previous, setPage, changeSort, changePageSize, resetList, first, last,
      setSearchParams, clearSearchParams,
    }, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
