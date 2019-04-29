import React, { Component } from 'react'
import {push} from 'react-router-redux'
import {Link} from 'react-router'
import FormGeneratorModal from '../../general/FormGeneratorModal'
import {getNormalizedDigit} from '../../../../utils/normalize'
import {baseRoute} from '../../../../utils/route'
import {getIntlDate} from '../../../../utils/date'
import {language as languageFile, ln, dir} from '../../../../utils/language'
import { siteConfig, } from '../../../../utils/siteConfig'

export default class TrUser extends Component {
  render() {
    const {item, pageNumber, pageSize, index, dispatch, } = this.props

    const user = item
    const {id, username, firstname, lastname, email, mobile,
    } = user
    return (
      <tr role="row">
        <td data-title={ln('number')}>
          {pageNumber && pageSize?(pageNumber - 1) * pageSize + index + 1: index + 1}
        </td>
        <td data-title={ln('id')} className="en-font">
          <Link to={`/${baseRoute.master}/user/${user.id}`}>{id}</Link>
        </td>
        <td data-title={ln('firstname')} className="en-font">{firstname || '-'}</td>
        <td data-title={ln('lastname')} className="en-font">{lastname || '-'}</td>
        <td data-title={ln('username')} className="en-font">{username || '-'}</td>
        <td data-title={ln('email')} className="en-font">
          {<Link to={`/${baseRoute.master}/user/${user.id}`}>{email}</Link> || '-'}
        </td>
        <td data-title={ln('mobile')}>{mobile || '-'}</td>
        <td data-title=" ">
          <button className="btn btn-primary"
            data-toggle="modal" data-target={`.user${id}`}>
            {ln('edit')}
          </button>
        </td>
        <td data-title={ln('delete')}>
          <label className="checkbox-container">
            <input type="checkbox"  />
            <span className="checkbox-checkmark"></span>
          </label>
          <FormGeneratorModal buttonText='editUser' iconName="pencil"
            formId={`user${id}`} innerForm='userModal' params={[id]} />
        </td>
      </tr>
    )
  }
}
