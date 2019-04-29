import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router'
import { getAllInvoices,
  next, previous, setPage, changeSort, changePageSize, resetList, first, last, setSearchParams, clearSearchParams,
} from '../../../actions'
import {baseRoute} from '../../../utils/route'
import GeneralList from '../../components/list/GeneralList'
import FormGeneratorModal from '../../components/general/FormGeneratorModal'
import { language, ln, dir, swip, } from '../../../utils/language'
import { siteConfig, } from '../../../utils/siteConfig'

class InvoicesPage extends Component {
  render() {
    console.log('InvoicesPage props', this.props)
    const {
      invoicesLoading, count,
      dispatch,
      pageNumber, pageSize, sortColumn, isAscending, searchParams,
      getAllInvoices,
      next, previous, setPage, changeSort, changePageSize, resetList, first, last, setSearchParams, clearSearchParams,
      params,
    } = this.props
    const { pageType } = params
    const listHandlers = {loadData: getAllInvoices, next, previous, setPage, changeSort, changePageSize,
      resetList, first, last, setSearchParams, clearSearchParams,
    }

    let tableHeaders = ['id', 'amount', 'createdDate' , 'status',  ]

    let sortColumns = ['id', 'amount', 'createdDate' , 'status' ]

    let data = this.props.data
    console.log('sortColumn', sortColumn);
    const pagetitle = 'invoices'
    const searchSelectData = {}
    const generalListProps = {isLoading: invoicesLoading, data, count,
      title: pagetitle, tableHeaders, sortColumns, listType: pagetitle, listHandlers,
      dispatch,
      pageNumber, pageSize, sortColumn, isAscending, searchParams,
      isSidebarCollapsed: true,
      searchItemDisplayName: 'invoice', searchItemType: 'invoice',
      searchInnerForm: 'searchInvoices',
      newRouteText: 'addInvoice',
      newModal: 'invoiceModal',
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
        <FormGeneratorModal buttonText='addInvoice' iconName="pencil" innerForm="invoiceModal" />

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    invoicesLoading, data, count,
  } = state.masterEntities
  const {pageNumber, pageSize, sortColumn, isAscending, searchParams, } = state.list

  console.log('state.list', state.list);
  return {
    invoicesLoading, data, count,
    pageNumber, pageSize, sortColumn, isAscending, searchParams,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {dispatch, ...bindActionCreators({
    getAllInvoices,
    next, previous, setPage, changeSort, changePageSize, resetList, first, last,
    setSearchParams, clearSearchParams,
  }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoicesPage)
