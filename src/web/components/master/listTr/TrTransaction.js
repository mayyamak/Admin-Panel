import React, { Component } from 'react'
import {push} from 'react-router-redux'
import {Link} from 'react-router'
import FormGeneratorModal from '../../general/FormGeneratorModal'
import {getNormalizedDigit} from '../../../../utils/normalize'
import {baseRoute} from '../../../../utils/route'
import {getIntlDate} from '../../../../utils/date'
import {language as languageFile, ln, dir} from '../../../../utils/language'
import { siteConfig, } from '../../../../utils/siteConfig'

export default class TrTransaction extends Component {
  render() {
    const {item, pageNumber, pageSize, index, dispatch, } = this.props

    const resort = item
    const {id, referenceId, amount, status, bookingInfo, createdDate,
    } = resort
    return (
      <tr role="row">
        <td data-title={ln('number')}>
          {pageNumber && pageSize?(pageNumber - 1) * pageSize + index + 1: index + 1}
        </td>
        <td data-title={ln('id')} className="en-font">
          <Link to={`/${baseRoute.master}/resort/${resort.id}`}>{id}</Link>
        </td>
        <td data-title={ln('referenceId')} className="en-font">{referenceId || '-'}</td>
        <td data-title={ln('amount')} className="en-font">{amount || '-'}</td>
        <td data-title={ln('status')} className="en-font">{status || '-'}</td>
        <td data-title={ln('bookingInfo')} className="en-font">{bookingInfo || '-'}</td>
        <td data-title={ln('createdDate')} className="en-font">{createdDate || '-'}</td>
        <td data-title=" ">
          <button className="btn btn-primary"
            data-toggle="modal" data-target={`.transaction${id}`}>
            {ln('edit')}
          </button>
        </td>
        <td data-title={ln('delete')}>
          <label className="checkbox-container">
            <input type="checkbox"  />
            <span className="checkbox-checkmark"></span>
          </label>
          <FormGeneratorModal buttonText='editTransaction' iconName="pencil"
            formId={`transaction${id}`} innerForm='transactionModal' params={[id]} />
        </td>
      </tr>
    )
  }
}
