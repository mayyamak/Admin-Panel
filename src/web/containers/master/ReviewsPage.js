import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router'
import { getAllReviews,
  next, previous, setPage, changeSort, changePageSize, resetList, first, last, setSearchParams, clearSearchParams,
} from '../../../actions'
import {baseRoute} from '../../../utils/route'
import GeneralList from '../../components/list/GeneralList'
import FormGeneratorModal from '../../components/general/FormGeneratorModal'
import { language, ln, dir, swip, } from '../../../utils/language'
import { siteConfig, } from '../../../utils/siteConfig'

class ReviewsPage extends Component {
  render() {
    console.log('ReviewsPage props', this.props)
    const {
      reviewsLoading, count,
      dispatch,
      pageNumber, pageSize, sortColumn, isAscending, searchParams,
      getAllReviews,
      next, previous, setPage, changeSort, changePageSize, resetList, first, last, setSearchParams, clearSearchParams,
      params,
    } = this.props
    const { pageType } = params
    const listHandlers = {loadData: getAllReviews, next, previous, setPage, changeSort, changePageSize,
      resetList, first, last, setSearchParams, clearSearchParams,
    }

    let tableHeaders = ['id', 'createdDate', 'rate', 'reviewer', 'target', 'comment', 'status', ]
    let sortColumns = ['id', 'createdDate', 'rate', 'reviewer', 'target', 'comment', 'status', ]

    let data = this.props.data
    console.log('sortColumn', sortColumn);
    const pagetitle = 'reviews'
    const searchSelectData = {}
    const generalListProps = {isLoading: reviewsLoading, data, count,
      title: pagetitle, tableHeaders, sortColumns, listType: pagetitle, listHandlers,
      dispatch,
      pageNumber, pageSize, sortColumn, isAscending, searchParams,
      isSidebarCollapsed: true,
      searchItemDisplayName: 'review', searchItemType: 'review',
      searchInnerForm: 'searchReviews',
      newRouteText: 'addReview',
      newModal: 'reviewModal',
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
        <FormGeneratorModal buttonText='addReview' iconName="pencil" innerForm="reviewModal" />

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    reviewsLoading, data, count,
  } = state.masterEntities
  const {pageNumber, pageSize, sortColumn, isAscending, searchParams, } = state.list

  console.log('state.list', state.list);
  return {
    reviewsLoading, data, count,
    pageNumber, pageSize, sortColumn, isAscending, searchParams,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {dispatch, ...bindActionCreators({
    getAllReviews,
    next, previous, setPage, changeSort, changePageSize, resetList, first, last,
    setSearchParams, clearSearchParams,
  }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsPage)
