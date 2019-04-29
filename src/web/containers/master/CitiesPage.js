import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router'
import { getAllCities,
  next, previous, setPage, changeSort, changePageSize, resetList, first, last, setSearchParams, clearSearchParams,
} from '../../../actions'
import {baseRoute} from '../../../utils/route'
import GeneralList from '../../components/list/GeneralList'
import FormGeneratorModal from '../../components/general/FormGeneratorModal'
import { language, ln, dir, swip, } from '../../../utils/language'
import { siteConfig, } from '../../../utils/siteConfig'

class CitiesPage extends Component {
  render() {
    console.log('CitiesPage props', this.props)
    const {
      citiesLoading, count,
      dispatch,
      pageNumber, pageSize, sortColumn, isAscending, searchParams,
      getAllCities,
      next, previous, setPage, changeSort, changePageSize, resetList, first, last, setSearchParams, clearSearchParams,
      params,
    } = this.props
    const { pageType } = params
    const listHandlers = {loadData: getAllCities, next, previous, setPage, changeSort, changePageSize,
      resetList, first, last, setSearchParams, clearSearchParams,
    }

    let tableHeaders = ['id', 'name', 'province', ]

    let sortColumns = ['id', 'name', 'province' ]

    let data = this.props.data
    console.log('sortColumn', sortColumn);
    const pagetitle = 'cities'
    const searchSelectData = {}
    const generalListProps = {isLoading: citiesLoading, data, count,
      title: pagetitle, tableHeaders, sortColumns, listType: pagetitle, listHandlers,
      dispatch,
      pageNumber, pageSize, sortColumn, isAscending, searchParams,
      isSidebarCollapsed: true,
      searchItemDisplayName: 'cities', searchItemType: 'cities',
      searchInnerForm: 'searchCities',
      newRouteText: 'addCity',
      newModal: 'cityModal',
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
        <FormGeneratorModal buttonText='addCity' iconName="pencil" innerForm="cityModal" />

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    citiesLoading, data, count,
  } = state.masterEntities
  const {pageNumber, pageSize, sortColumn, isAscending, searchParams, } = state.list

  console.log('state.list', state.list);
  return {
    citiesLoading, data, count,
    pageNumber, pageSize, sortColumn, isAscending, searchParams,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {dispatch, ...bindActionCreators({
    getAllCities,
    next, previous, setPage, changeSort, changePageSize, resetList, first, last,
    setSearchParams, clearSearchParams,
  }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesPage)
