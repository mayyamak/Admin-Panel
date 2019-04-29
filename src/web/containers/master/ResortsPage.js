import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router'
import { getAllResorts, editResort,
  next, previous, setPage, changeSort, changePageSize, resetList, first, last, setSearchParams, clearSearchParams,
  changeStep,
} from '../../../actions'
import {baseRoute} from '../../../utils/route'
import FormGeneratorModal from '../../components/general/FormGeneratorModal'
import GeneralList from '../../components/list/GeneralList'
import { language, ln, dir, swip, } from '../../../utils/language'
import { siteConfig, } from '../../../utils/siteConfig'
class ResortsPage extends Component {
  render() {
    console.log('ResortsPage props', this.props)
    const {
      resortsLoading, count,
      dispatch,
      pageNumber, pageSize, sortColumn, isAscending, searchParams,
      getAllResorts, editResort,
      next, previous, setPage, changeSort, changePageSize, resetList, first, last, setSearchParams, clearSearchParams,
      params,
      changeStep,
    } = this.props
    const { pageType } = params
    const listHandlers = {loadData: getAllResorts, next, previous, setPage, changeSort, changePageSize,
      resetList, first, last, setSearchParams, clearSearchParams,
    }
    const handlers = { editResort }

    let tableHeaders = ['id', 'name', 'city', 'type', 'status',]

    let sortColumns = ['id', 'name', 'city', 'type', 'status' ]

    let data = this.props.data
    const pagetitle = 'resorts'
    const searchSelectData = {}
    const generalListProps = {isLoading: resortsLoading, data, count,
      title: pagetitle, tableHeaders, sortColumns, listType: pagetitle, listHandlers,
      dispatch,
      pageNumber, pageSize, sortColumn, isAscending, searchParams,
      isSidebarCollapsed: true,
      searchItemDisplayName: 'resort', searchItemType: 'resort',
      searchInnerForm: 'searchResorts',
      newRouteText: 'addResort',
      newModal: 'resortModal',
      searchSelectData, lastParams: {pageType},
    }
    console.log('ResortsPage generalListProps', generalListProps);
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
        <FormGeneratorModal buttonText='addResort' iconName="pencil" innerForm="resortModal"
          activeStep="1" handlers={{changeStep}}
          />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    resortsLoading, data, count,
  } = state.masterEntities
  const {pageNumber, pageSize, sortColumn, isAscending, searchParams, } = state.list

  console.log('state.list', state.list);
  return {
    resortsLoading, data, count,
    pageNumber, pageSize, sortColumn, isAscending, searchParams,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {dispatch, ...bindActionCreators({
    getAllResorts, editResort,
    next, previous, setPage, changeSort, changePageSize, resetList, first, last,
    changeStep,
    setSearchParams, clearSearchParams,
  }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ResortsPage)
