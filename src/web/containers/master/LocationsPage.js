import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router'
import { loadLocations,
  next, previous, setPage, changeSort, changePageSize, resetList, first, last, setSearchParams, clearSearchParams } from '../../../actions'
import {baseRoute} from '../../../utils/route'
import GeneralList from '../../components/list/GeneralList'
import { language, ln, dir, swip, } from '../../../utils/language'
import { siteConfig, } from '../../../utils/siteConfig'

class LocationsPage extends Component {
  render() {
    console.log('LocationsPage props', this.props)
    const {
      locationsLoading, count,
      dispatch,
      pageNumber, pageSize, sortColumn, isAscending, searchParams,
      loadLocations,
      next, previous, setPage, changeSort, changePageSize, resetList, first, last, setSearchParams, clearSearchParams,
      params,
    } = this.props
    const { pageType } = params
    const listHandlers = {loadData: loadLocations, next, previous, setPage, changeSort, changePageSize,
      resetList, first, last, setSearchParams, clearSearchParams,
    }

    let tableHeaders = ['province', 'city', 'locationName', 'latitude', 'longitude', ]
    let sortColumns = []

    let data = this.props.data
    console.log('sortColumn', sortColumn);
    const pagetitle = 'touristAttractions'
    const searchSelectData = {
    }
    data = [{locationName: 'تست', latitude: 123, longitude: 456, province: 1, ciy: 2}]
    const generalListProps = {isLoading: locationsLoading, data, count,
      title: pagetitle, tableHeaders, sortColumns, listType: pagetitle, listHandlers,
      dispatch,
      pageNumber, pageSize, sortColumn, isAscending, searchParams,
      isSidebarCollapsed: true,
      searchItemDisplayName: 'locationName', searchItemType: '  ',
      searchSelectData, lastParams: {pageType},
      searchInnerForm: 'searchLocations',
      newRoute: 'location',
      newRouteText: 'addNewLocation'
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

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    locationsLoading, data, count,
  } = state.masterEntities
  const {pageNumber, pageSize, sortColumn, isAscending, searchParams, } = state.list

  console.log('state.list', state.list);
  return {
    locationsLoading, data, count,
    pageNumber, pageSize, sortColumn, isAscending, searchParams,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {dispatch, ...bindActionCreators({
    loadLocations,
    next, previous, setPage, changeSort, changePageSize, resetList, first, last,
    setSearchParams, clearSearchParams,
  }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationsPage)
