import React, { Component } from 'react'
import {language, ln, dir} from '../../../utils/language'
import { siteConfig } from '../../../utils/siteConfig'

export default class UserTabs extends Component {
  render() {
    const {tabsHandlers, baseColor,
      pageNumber, pageSize, sortColumn, isAscending, searchParams, userId, isOwnPage,
    } = this.props
    const {loadUserTransactions,
      loadUserOrders, loadUserInvoices,
      loadUserUsers,
    } = tabsHandlers
    console.log('UserTabs props', this.props);
    const iconColor = `text-${baseColor}`
    return (
      <ul className={`nav nav-tabs user-nav-tabs user-nav-tabs-${baseColor} bg-${baseColor}`}>
        <li className="active">
          <a data-toggle="tab" href="#about">{ln('about')}</a>
          <i className={`fa fa-caret-up up md-hide ${iconColor}`} />
          <i className={`fa fa-caret-right right sm-show ${iconColor}`} />
        </li>

        <li>
          <a onClick={() => {
              loadUserTransactions(pageNumber, pageSize, sortColumn, isAscending, searchParams, {userId})
            }
          } data-toggle="tab" href="#transactions">{ln('transactions')}
          </a>
          <i className={`fa fa-caret-up up md-hide ${iconColor}`} />
          <i className={`fa fa-caret-right right sm-show ${iconColor}`} />
        </li>
        <li>
          <a onClick={() => {
              loadUserInvoices(pageNumber, pageSize, sortColumn, isAscending, searchParams, {userId})
            }}
            data-toggle="tab" href="#productInvoices">{ln('invoices')}
          </a>
          <i className={`fa fa-caret-up up md-hide ${iconColor}`} />
          <i className={`fa fa-caret-right right sm-show ${iconColor}`} />
        </li>
        <li>
          <a onClick={() => {
            loadUserUsers(pageNumber, pageSize, sortColumn, isAscending, searchParams, {userId})
            }}
            data-toggle="tab" href="#UserUsers">{ln('UserUsers')}
          </a>
          <i className={`fa fa-caret-up up md-hide ${iconColor}`} />
          <i className={`fa fa-caret-right right sm-show ${iconColor}`} />
        </li>
        <li>
          <a data-toggle="tab" href="#changePassword">{ln('changePassword')}
          </a>
          <i className={`fa fa-caret-up up md-hide ${iconColor}`} />
          <i className={`fa fa-caret-right right sm-show ${iconColor}`} />
        </li>

      </ul>
    )
  }
}
