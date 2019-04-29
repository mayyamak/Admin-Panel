import React from 'react'
import {Route} from 'react-router'
import { baseRoute } from '../utils/route'
import App from './containers/general/App'
import LoginPage from './containers/general/LoginPage'
import UsersPage from './containers/master/UsersPage'
import AddLocationPage from './containers/master/AddLocationPage'
import LocationsPage from './containers/master/LocationsPage'
import ResortsPage from './containers/master/ResortsPage'
import TransactionsPage from './containers/master/TransactionsPage'
import ReviewsPage from './containers/master/ReviewsPage'
import CitiesPage from './containers/master/CitiesPage'
import BookingsPage from './containers/master/BookingsPage'
import InvoicePage from './containers/master/InvoicePage'
import InvoicesPage from './containers/master/InvoicesPage'
import DashboardPage from './containers/general/DashboardPage'
import UserPage from './containers/user/UserPage'
import FirstPage from './containers/general/FirstPage'
import NoAccessPage from './containers/general/NoAccessPage'
import CorporateDashboardPage from './containers/business/CorporateDashboardPage'
import CorporateTravelPage from './containers/business/CorporateTravelPage'
import TravelsHistoriesPage from './containers/business/TravelsHistoriesPage'
import CorporateResortsPage from './containers/business/CorporateResortsPage'
import SupportPage from './containers/general/SupportPage'
import AboutPage from './containers/general/AboutPage'
import {requireAuthentication} from './components/general/AuthenticatedComponent'

export default (
  <Route>
  <Route path={`/login`} component={LoginPage} />
  <Route path="" component={App}>
    <Route path={`/${baseRoute.master}/reviews`} component={requireAuthentication(ReviewsPage)} />
    <Route path={`/${baseRoute.master}/transactions`} component={requireAuthentication(TransactionsPage)} />
    <Route path={`/${baseRoute.master}/resorts`} component={requireAuthentication(ResortsPage)} />
    <Route path={`/${baseRoute.master}/locations`} component={requireAuthentication(LocationsPage)} />
    <Route path={`/${baseRoute.master}/cities`} component={requireAuthentication(CitiesPage)} />
    <Route path={`/${baseRoute.master}/bookings`} component={requireAuthentication(BookingsPage)} />
    <Route path={`/${baseRoute.master}/location`} component={requireAuthentication(AddLocationPage)} />
    <Route path={`/${baseRoute.master}/invoice/:invoiceId`} component={requireAuthentication(InvoicePage)} />
    <Route path={`/${baseRoute.master}/invoices`} component={requireAuthentication(InvoicesPage)} />
    <Route path={`/${baseRoute.master}/user/:userId`} component={requireAuthentication(UserPage)} />
    <Route path={`/${baseRoute.master}/user`} component={requireAuthentication(UserPage)} />
    <Route path={`/${baseRoute.master}/users`} component={requireAuthentication(UsersPage)} />
    <Route path={`/${baseRoute.master}/dashboard`} component={requireAuthentication(DashboardPage)} />
    <Route path={`/${baseRoute.master}`} component={requireAuthentication(DashboardPage)} />

    <Route path={`/${baseRoute.business}/dashboard`} component={requireAuthentication(CorporateDashboardPage)} />
    <Route path={`/${baseRoute.business}`} component={requireAuthentication(CorporateDashboardPage)} />
    <Route path={`/${baseRoute.business}/users`} component={requireAuthentication(UsersPage)} />
    <Route path={`/${baseRoute.business}/transactions`} component={requireAuthentication(TransactionsPage)} />
    <Route path={`/${baseRoute.business}/corporateTravel`} component={requireAuthentication(CorporateTravelPage)} />
    <Route path={`/${baseRoute.business}/travelsHistories`} component={requireAuthentication(TravelsHistoriesPage)} />
    <Route path={`/${baseRoute.business}/corporateResorts`} component={requireAuthentication(ResortsPage)} />
    <Route path={`/${baseRoute.business}/support`} component={requireAuthentication(SupportPage)} />

    </Route>
  </Route>
)
