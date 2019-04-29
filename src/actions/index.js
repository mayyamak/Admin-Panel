import * as listActions from './list/listActions'
import * as generalActions from './general/generalActions'

import * as masterGeneralActions from './master/generalActions'
import * as userActions from './master/userActions'
import * as resortActions from './master/resortActions'
import * as transactionActions from './master/transactionActions'
import * as reviewActions from './master/reviewActions'
import * as authActions from './master/authActions'
import * as bookingActions from './master/bookingActions'
import * as invoiceActions from './master/invoiceActions'
import * as locationActions from './master/locationActions'

module.exports = {
  ...generalActions,
  ...authActions,
  ...resortActions,
  ...masterGeneralActions,
  ...listActions,
  ...userActions,
  ...reviewActions,
  ...transactionActions,
  ...bookingActions,
  ...locationActions,
  ...invoiceActions,
}
