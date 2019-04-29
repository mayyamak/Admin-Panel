import React, { Component } from 'react'
import {language, ln, dir} from '../../../utils/language'
import {baseRoute} from '../../../utils/route'
import Loading from '../../components/general/Loading'
import DashboardBox from '../../components/general/DashboardBox'
import { siteConfig, } from '../../../utils/siteConfig'
import { connect } from 'react-redux'

class DashboardPage extends Component {
  render() {
    const { userData, userDataLoading, } = this.props
    console.log('DashboardPage props', this.props);
    // const noInvoicePaid = !userData || !userData.plan || !userData.plan.jsonInfo || JSON.parse(userData.plan.jsonInfo).type != 'business'
    const noInvoicePaid = !userData || !userData.lastPaidInvoice || userData.lastPaidInvoice.invoiceStatus != 'PAID'
    const isCadminNotAllowed = false //userData && userData.groups.length == 1 && userData.groups[0].name == 'user_group'
    return userDataLoading?
      <Loading />
      :
      isCadminNotAllowed? <div style={{padding: 50}}>{ln('noaccess')}.</div>: (
      <div>
        <section className="content-header">
          <h1>
            {ln('dashboard')}
            &nbsp;
              <small>{ln('controlPanel')}</small>
          </h1>
          <ol className="breadcrumb">
            <li className="active">{ln('home')}</li>
            <li className="active">{ln('dashboard')}</li>
          </ol>
        </section>

        <section className="content">
        {
          // userData && userData.role.name == 'admin'
          true
          ?
          <div className="row">
            <DashboardBox title="users" icon="users" />
            <DashboardBox title="resorts" icon="home" />
            <DashboardBox title="bookings" icon="bookmark" />
            <DashboardBox title="locations" icon="place-of-worship" />
            <DashboardBox title="cities" icon="city" />
            <DashboardBox title="transactions" icon="coins" />
            <DashboardBox title="invoices" icon="copy" />
          </div>
          :
          <div className="row">
            <DashboardBox title="users" icon="users" />
            <DashboardBox title="transactions" icon="coins" />
            <DashboardBox title="corporateTravel" icon="suitcase" />
            <DashboardBox title="travelsHistories" icon="history" />
            <DashboardBox title="corporateResorts" icon="warehouse" />
            <DashboardBox title="support" icon="headset" />
          </div>
        }
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {userData, userDataLoading} = state.generalEntities

  return {
    userData, userDataLoading,
  }
}


export default connect(mapStateToProps)(DashboardPage)
