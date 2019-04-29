import React, { Component } from 'react'
import {push} from 'react-router-redux'
import {Link} from 'react-router'
import FormGeneratorModal from '../../general/FormGeneratorModal'
import {getNormalizedDigit} from '../../../../utils/normalize'
import {baseRoute} from '../../../../utils/route'
import {getIntlDate} from '../../../../utils/date'
import {language as languageFile, ln, dir} from '../../../../utils/language'
import { siteConfig, } from '../../../../utils/siteConfig'

export default class TrCity extends Component {
  render() {
    const {item, pageNumber, pageSize, index, dispatch, } = this.props

    const city = item
    const {id, name, province, status,
    } = city
    return (
      <tr role="row">
        <td data-title={ln('number')}>
          {pageNumber && pageSize?(pageNumber - 1) * pageSize + index + 1: index + 1}
        </td>
        <td data-title={ln('id')} className="en-font">
          <Link to={`/${baseRoute.master}/city/${city.id}`}>{id}</Link>
        </td>
        <td data-title={ln('name')} className="en-font">{name || '-'}</td>
        <td data-title={ln('province')} className="en-font">{province || '-'}</td>
        <td data-title={ln('status')} className="en-font">{status || '-'}</td>
        <td data-title=" ">
          <button className="btn btn-primary"
            data-toggle="modal" data-target={`.city${id}`}>
            {ln('edit')}
          </button>
        </td>
        <td data-title={ln('delete')}>
          <label className="checkbox-container">
            <input type="checkbox"  />
            <span className="checkbox-checkmark"></span>
          </label>
          <FormGeneratorModal buttonText='editCity' iconName="pencil"
            formId={`city${id}`} innerForm='cityModal' params={[id]} />
        </td>
      </tr>
    )
  }
}
