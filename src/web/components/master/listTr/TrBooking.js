import React, { Component } from 'react'
import {push} from 'react-router-redux'
import {Link} from 'react-router'
import FormGeneratorModal from '../../general/FormGeneratorModal'
import {getNormalizedDigit} from '../../../../utils/normalize'
import {baseRoute} from '../../../../utils/route'
import {getIntlDate} from '../../../../utils/date'
import {language as languageFile, ln, dir} from '../../../../utils/language'
import { siteConfig, } from '../../../../utils/siteConfig'

export default class TrBooking extends Component {
  render() {
    const {item, pageNumber, pageSize, index, dispatch, } = this.props

    const booking = item
    const {id, referenceId, type, checkIn, checkOut, nightsCount, status,
    } = booking
    return (
      <tr role="row">
        <td data-title={ln('number')}>
          {pageNumber && pageSize?(pageNumber - 1) * pageSize + index + 1: index + 1}
        </td>
        <td data-title={ln('id')} className="en-font">
          <Link to={`/${baseRoute.master}/booking/${booking.id}`}>{id}</Link>
        </td>
        <td data-title={ln('referenceId')}>{referenceId || '-'}</td>
        <td data-title={ln('type')}>{type || '-'}</td>
        <td data-title={ln('checkIn')}>{checkIn || '-'}</td>
        <td data-title={ln('checkOut')}>{checkOut || '-'}</td>
        <td data-title={ln('nightsCount')}>{nightsCount || '-'}</td>
        <td data-title={ln('status')}>{status || '-'}</td>
        <td data-title=" ">
          <button className="btn btn-primary"
            data-toggle="modal" data-target={`.booking${id}`}>
            {ln('edit')}
          </button>
        </td>
        <td data-title={ln('delete')}>
          <label className="checkbox-container">
            <input type="checkbox"  />
            <span className="checkbox-checkmark"></span>
          </label>
          <FormGeneratorModal buttonText='editBooking' iconName="pencil"
            formId={`booking${id}`} innerForm='bookingModal' params={[id]} />
        </td>
      </tr>
    )
  }
}
