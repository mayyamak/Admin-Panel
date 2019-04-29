import React, { Component } from 'react'

// master
import TrUserTransaction from '../master/listTr/TrUserTransaction'
import TrUser from '../master/listTr/TrUser'
import TrResort from '../master/listTr/TrResort'
import TrTransaction from '../master/listTr/TrTransaction'
import TrReview from '../master/listTr/TrReview'
import TrCity from '../master/listTr/TrCity'
import TrBooking from '../master/listTr/TrBooking'
import TrInvoice from '../master/listTr/TrInvoice'
import TrLocation from '../master/listTr/TrLocation'

//business

export default class TR extends Component {
  render() {
    // console.log('TR', this.props);
    const dataTrProps = {...this.props, key:index}
    const index = dataTrProps.index

    const dataUserProps = { ...dataTrProps, isUser: true }
    switch (dataTrProps.listType) {
      // master
      case 'touristAttractions':
        return <TrLocation {...dataTrProps} />
      case 'userTransactions':
        return <TrUserTransaction {...dataTrProps} />
      case 'users':
        return <TrUser {...dataTrProps} />
      case 'resorts':
        return <TrResort {...dataTrProps} />
      case 'reviews':
        return <TrReview {...dataTrProps} />
      case 'transactions':
        return <TrTransaction {...dataTrProps} />
      case 'bookings':
        return <TrBooking {...dataTrProps} />
      case 'cities':
        return <TrCity {...dataTrProps} />
      case 'invoices':
        return <TrInvoice {...dataTrProps} />
      default:
        return <tr key={index}></tr>
    }
  }
}
