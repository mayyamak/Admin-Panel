import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router'
import { getAllTransactions,
  next, previous, setPage, changeSort, changePageSize, resetList, first, last, setSearchParams, clearSearchParams,
} from '../../../actions'
import {baseRoute} from '../../../utils/route'
import GeneralList from '../../components/list/GeneralList'
import FormGeneratorModal from '../../components/general/FormGeneratorModal'
import { language, ln, dir, swip, } from '../../../utils/language'
import { siteConfig, } from '../../../utils/siteConfig'

class TransactionsPage extends Component {
  render() {
    console.log('TransactionsPage props', this.props)
    const {
      transactionsLoading, count,
      dispatch,
      pageNumber, pageSize, sortColumn, isAscending, searchParams,
      getAllTransactions,
      next, previous, setPage, changeSort, changePageSize, resetList, first, last, setSearchParams, clearSearchParams,
      params,
    } = this.props
    const { pageType } = params
    const listHandlers = {loadData: getAllTransactions, next, previous, setPage, changeSort, changePageSize,
      resetList, first, last, setSearchParams, clearSearchParams,
    }

    let tableHeaders = ['id', 'referenceId', 'amount', 'status', 'bookingInfo', 'createdDate', ]
    let sortColumns = ['id', 'referenceId', 'amount', 'status', 'bookingInfo', 'createdDate', ]

    let data = this.props.data
    console.log('sortColumn', sortColumn);
    const pagetitle = 'transactions'
    const searchSelectData = {}
    const generalListProps = {isLoading: transactionsLoading, data, count,
      title: pagetitle, tableHeaders, sortColumns, listType: pagetitle, listHandlers,
      dispatch,
      pageNumber, pageSize, sortColumn, isAscending, searchParams,
      isSidebarCollapsed: true,
      searchItemDisplayName: 'transaction', searchItemType: 'transaction',
      searchInnerForm: 'searchTransactions',
      newRouteText: 'addTransaction',
      newModal: 'transactionModal',
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
        <FormGeneratorModal buttonText='addTransaction' iconName="pencil" innerForm="transactionModal" />

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    transactionsLoading, data, count,
  } = state.masterEntities
  const {pageNumber, pageSize, sortColumn, isAscending, searchParams, } = state.list

  console.log('state.list', state.list);
  return {
    transactionsLoading, data, count,
    pageNumber, pageSize, sortColumn, isAscending, searchParams,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {dispatch, ...bindActionCreators({
    getAllTransactions,
    next, previous, setPage, changeSort, changePageSize, resetList, first, last,
    setSearchParams, clearSearchParams,
  }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsPage)
