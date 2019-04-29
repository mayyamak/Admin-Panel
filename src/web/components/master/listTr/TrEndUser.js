import React, { Component } from 'react'
import {push} from 'react-router-redux'
import {Link} from 'react-router'
import FormGeneratorModal from '../../general/FormGeneratorModal'
import {getNormalizedDigit} from '../../../../utils/normalize'
import {baseRoute} from '../../../../utils/route'
import {getIntlDate} from '../../../../utils/date'
import {language as languageFile, ln, dir, swip,} from '../../../../utils/language'

export default class TrEndUser extends Component {
  render() {
    const {item, pageNumber, pageSize, index, dispatch, } = this.props

    const user = item
    const {id, username, displayName, balance, email, mobileNumber, mobileVerified,
      verificationCode, enabled, groups, language, name, family, authorized, createdAt,
    } = user
    let profile = user.profile || {}
    const {companyNationalCode, company, companyName, nationalId, } = profile
    return (
      <tr role="row">
        <td data-title={ln('number')}>
          {pageNumber && pageSize?(pageNumber - 1) * pageSize + index + 1: index + 1}
        </td>
        <td data-title={ln('profileId')}>{id}</td>
        <td data-title={ln('thusername')}>
          <button className="btn btn-primary"
            data-toggle="modal" data-target={`.enduser${id}`}>
            {ln('edit')}
          </button>
        </td>
        <td data-title={ln('themail')} className="en-font">{email}</td>
        <td data-title={ln('thenabled')}>{enabled? <i className="fa fa-check text-green"/>:<i className="fa fa-times text-red"/>}</td>
        <td data-title={ln('thusertype')}>{UserTypes(groups)}</td>
        <td data-title={ln('registrationDate')}>{getIntlDate(createdAt)}</td>
      </tr>
    )
  }
}
