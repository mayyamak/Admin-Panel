import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router'
import { getAllUsers,
  next, previous, setPage, changeSort, changePageSize, resetList, first, last, setSearchParams, clearSearchParams,
} from '../../../actions'
import {baseRoute} from '../../../utils/route'
import GeneralList from '../../components/list/GeneralList'
import FormGeneratorModal from '../../components/general/FormGeneratorModal'
import { language, ln, dir, swip, } from '../../../utils/language'
import { siteConfig, } from '../../../utils/siteConfig'

class UsersPage extends Component {
  render() {
    console.log('UsersPage props', this.props)
    const {
      usersLoading, count,
      dispatch,
      pageNumber, pageSize, sortColumn, isAscending, searchParams,
      getAllUsers,
      next, previous, setPage, changeSort, changePageSize, resetList, first, last, setSearchParams, clearSearchParams,
      params,
    } = this.props
    const { pageType } = params
    const listHandlers = {loadData: getAllUsers, next, previous, setPage, changeSort, changePageSize,
      resetList, first, last, setSearchParams, clearSearchParams,
    }

    let tableHeaders = ['id', 'firstname', 'lastname', 'username', 'email', 'mobile', ]

    let sortColumns = ['id', 'firstname', 'lastname', 'username', 'email', 'mobile', ]

    let data = this.props.data
    console.log('sortColumn', sortColumn);
    const pagetitle = 'users'
    const searchSelectData = {}
    const generalListProps = {isLoading: usersLoading, data, count,
      title: pagetitle, tableHeaders, sortColumns, listType: pagetitle, listHandlers,
      dispatch,
      pageNumber, pageSize, sortColumn, isAscending, searchParams,
      isSidebarCollapsed: true,
      searchItemDisplayName: 'username', searchItemType: 'username',
      searchInnerForm: 'searchUsers',
      newRouteText: 'addUser',
      newModal: 'userModal',
      searchSelectData, lastParams: {pageType},
    }
    return (
      <div>
        <section className="content-header">
          <h1>
            {ln(pagetitle)}
            &nbsp;
              <small>{ln('controlPanel')}</small>
          </h1>
          <ol className="breadcrumb">
            <li><Link to={`/${baseRoute.master}`}>{ln('home')}</Link></li>
            <li className="active"> {ln(pagetitle)}</li>

          </ol>
        </section>

        <GeneralList {...generalListProps} />
        <FormGeneratorModal buttonText='addUser' iconName="pencil" innerForm="userModal" />

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    usersLoading, data, count,
  } = state.masterEntities
  const {pageNumber, pageSize, sortColumn, isAscending, searchParams, } = state.list

  console.log('state.list', state.list);
  return {
    usersLoading, data, count,
    pageNumber, pageSize, sortColumn, isAscending, searchParams,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {dispatch, ...bindActionCreators({
    getAllUsers,
    next, previous, setPage, changeSort, changePageSize, resetList, first, last,
    setSearchParams, clearSearchParams,
  }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)
