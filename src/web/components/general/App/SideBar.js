import React, { Component } from 'react'
import {Link} from 'react-router'
import Loading from '../../../components/general/Loading'
import { baseRoute } from '../../../../utils/route'
import { language, ln, dir } from '../../../../utils/language'
import { percentColor, changeBaseColor, } from '../../../../utils/color'
import { siteConfig, } from '../../../../utils/siteConfig'
import profileImage from '../../../../../design/dist/img/profile-image.png'

export default class SideBar extends Component {
  render() {
    const treeContainer = `pull-${dir('reverseAlign')}-container`
    const treeIcon = `fa fa-angle-${dir('align')} pull-${dir('reverseAlign')}`
    const route = location.pathname.substr(location.pathname.lastIndexOf('/') + 1)
    console.log('SideBar props', this.props);
    return (
      <span>
        {
          // this.props.userData && (this.props.userData.role.name == 'admin'?
          (baseRoute.isMaster?
          <ul className="sidebar-menu">
              <li className={`treeview ${(route == 'users' || route == 'business' || route == 'individual') && 'active'}`}>
                <a className={`slide-arrow-${language.key}`} href="#">
                  <i className="fa fa-user"></i> <span>{ln('users')}</span>
                  <span className={`${treeContainer} slide-span-${language.key}`}>
                    <i className={treeIcon}></i>
                  </span>
                </a>
                <ul className={`treeview-menu  treeview-menu-${language.key}`} style={{ paddingBottom: 10 }}>
                  <li  className={(route == 'users')? 'active': ''}>
                    <Link className="gray-link" to={`/${baseRoute.master}/users`}>
                      <i className="fa fa-user-alt"></i>
                      <span>{ln('allUsers')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="gray-link" to={`/${baseRoute.master}/users/business`}>
                      <i className="fa fa-user-tie"></i>
                      <span>{ln('businessUsers')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="gray-link" to={`/${baseRoute.master}/users/guest`}>
                      <i className="fa fa-user-ninja"></i>
                      <span>{ln('guests')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="gray-link" to={`/${baseRoute.master}/users/host`}>
                      <i className="fa fa-user-secret"></i>
                      <span>{ln('hosts')}</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={(route == 'resorts')? 'active': ''}>
                <Link className="gray-link" to={`/${baseRoute.master}/resorts`}>
                  <i className="sidebar-icon fa fa-bed"></i>
                  <span>{ln('resorts')}</span>
                </Link>
              </li>
              <li className={(route == 'bookings')? 'active': ''}>
                <Link className="gray-link" to={`/${baseRoute.master}/bookings`}>
                  <i className="sidebar-icon fa fa-bookmark"></i>
                  <span>{ln('bookings')}</span>
                </Link>
              </li>
              <li className={(route == 'locations')? 'active': ''}>
                <Link className="gray-link" to={`/${baseRoute.master}/locations`}>
                  <i className="sidebar-icon fa fa-place-of-worship"></i>
                  <span>{ln('touristAttractions')}</span>
                </Link>
              </li>
              <li className={(route == 'cities')? 'active': ''}>
                <Link className="gray-link" to={`/${baseRoute.master}/cities`}>
                  <i className="sidebar-icon fa fa-city"></i>
                  <span>{ln('cities')}</span>
                </Link>
              </li>
              <li className={(route == 'transactions')? 'active': ''}>
                <Link className="gray-link" to={`/${baseRoute.master}/transactions`}>
                  <i className="sidebar-icon fa fa-coins"></i>
                  <span>{ln('credits')}</span>
                </Link>
              </li>
              <li className={(route == 'reviews')? 'active': ''}>
                <Link className="gray-link" to={`/${baseRoute.master}/reviews`}>
                  <i className="sidebar-icon fa fa-address-card"></i>
                  <span>{ln('reviews')}</span>
                </Link>
              </li>
              <li className={`treeview ${(route == 'invoices' || route == 'draft' || route == 'pending' || route == 'reject') && 'active'}`}>
                <a className={`slide-arrow-${language.key}`} href="#">
                  <i className="fa fa-copy"></i> <span>{ln('invoices')}</span>
                  <span className={`${treeContainer} slide-span-${language.key}`}>
                    <i className={treeIcon}></i>
                  </span>
                </a>
                <ul className={`treeview-menu  treeview-menu-${language.key}`} style={{ paddingBottom: 10 }}>
                  <li>
                    <Link className="gray-link" to={`/${baseRoute.master}/invoices`}>
                      <i className="fa fa-file-alt"></i>
                      <span>{ln('allInvoices')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="gray-link" to={`/${baseRoute.master}/invoices/draft`}>
                      <i className="fa fa-file-import"></i>
                      <span>{ln('draftInvoices')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="gray-link" to={`/${baseRoute.master}/invoices/paid`}>
                      <i className="fa fa-file-archive"></i>
                      <span>{ln('paidInvoices')}</span>
                    </Link>
                  </li>
                </ul>
              </li>
          </ul>
          :
          <ul className="sidebar-menu">
            <li className={(route == 'dashboard')? 'active': ''}>
              <Link className="gray-link" to={`/${baseRoute.business}/dashboard`}>
                <i className="sidebar-icon fa fa-tachometer-alt"></i>
                <span>{ln('dashboard')}</span>
              </Link>
            </li>
            <li className={(route == 'users')? 'active': ''}>
              <Link className="gray-link" to={`/${baseRoute.business}/users`}>
                <i className="sidebar-icon fa fa-users"></i>
                <span>{ln('users')}</span>
              </Link>
            </li>
            <li className={(route == 'transactions')? 'active': ''}>
              <Link className="gray-link" to={`/${baseRoute.business}/transactions`}>
                <i className="sidebar-icon fa fa-coins"></i>
                <span>{ln('transactions')}</span>
              </Link>
            </li>
            <li className={(route == 'corporateTravel')? 'active': ''}>
              <Link className="gray-link" to={`/${baseRoute.business}/corporateTravel`}>
                <i className="sidebar-icon fa fa-suitcase"></i>
                <span>{ln('corporateTravel')}</span>
              </Link>
            </li>
            <li className={(route == 'travelsHistories')? 'active': ''}>
              <Link className="gray-link" to={`/${baseRoute.business}/travelsHistories`}>
                <i className="sidebar-icon fa fa-history"></i>
                <span>{ln('travelsHistories')}</span>
              </Link>
            </li>
            <li className={(route == 'corporateResorts')? 'active': ''}>
              <Link className="gray-link" to={`/${baseRoute.business}/corporateResorts`}>
                <i className="sidebar-icon fa fa-warehouse"></i>
                <span>{ln('corporateResorts')}</span>
              </Link>
            </li>
            <li className={(route == 'support')? 'active': ''}>
              <Link className="gray-link" to={`/${baseRoute.business}/support`}>
                <i className="sidebar-icon fa fa-headset"></i>
                <span>{ln('support')}</span>
              </Link>
            </li>

          </ul>
        )}
      </span>
    )
  }
}
