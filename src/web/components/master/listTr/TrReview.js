import React, { Component } from 'react'
import {push} from 'react-router-redux'
import {Link} from 'react-router'
import FormGeneratorModal from '../../general/FormGeneratorModal'
import {getNormalizedDigit} from '../../../../utils/normalize'
import {baseRoute} from '../../../../utils/route'
import {getIntlDate} from '../../../../utils/date'
import {language as languageFile, ln, dir} from '../../../../utils/language'
import { siteConfig, } from '../../../../utils/siteConfig'

export default class TrReview extends Component {
  render() {
    const {item, pageNumber, pageSize, index, dispatch, } = this.props

    const resort = item
    const {id, createdDate, rate, reviewer, target, comment, status,
    } = resort
    return (
      <tr role="row">
        <td data-title={ln('number')}>
          {pageNumber && pageSize?(pageNumber - 1) * pageSize + index + 1: index + 1}
        </td>
        <td data-title={ln('id')} className="en-font">
          <Link to={`/${baseRoute.master}/resort/${resort.id}`}>{id}</Link>
        </td>
        <td data-title={ln('createdDate')} className="en-font">{createdDate || '-'}</td>
        <td data-title={ln('rate')} className="en-font">{rate || '-'}</td>
        <td data-title={ln('reviewer')} className="en-font">{reviewer || '-'}</td>
        <td data-title={ln('target')} className="en-font">{target || '-'}</td>
        <td data-title={ln('comment')} className="en-font">{comment || '-'}</td>
        <td data-title={ln('status')} className="en-font">{status || '-'}</td>
        <td data-title=" ">
          <button className="btn btn-primary"
            data-toggle="modal" data-target={`.review${id}`}>
            {ln('edit')}
          </button>
        </td>
        <td data-title={ln('delete')}>
          <label className="checkbox-container">
            <input type="checkbox"  />
            <span className="checkbox-checkmark"></span>
          </label>
          <FormGeneratorModal buttonText='editReview' iconName="pencil"
            formId={`review${id}`} innerForm='reviewModal' params={[id]} />
        </td>
      </tr>
    )
  }
}
