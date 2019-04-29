import React, { Component } from 'react'
import {push} from 'react-router-redux'
import {Link} from 'react-router'
import FormGeneratorModal from '../../general/FormGeneratorModal'
import {getNormalizedDigit} from '../../../../utils/normalize'
import {baseRoute} from '../../../../utils/route'
import {getIntlDate} from '../../../../utils/date'
import {language as languageFile, ln, dir} from '../../../../utils/language'
import { siteConfig, } from '../../../../utils/siteConfig'

export default class TrLocation extends Component {
  render() {
    const {item, pageNumber, pageSize, index, dispatch, } = this.props

    const location = item
    const {
      id, locationName, province, city, latitude, longitude,
    } = location

    return (
      <tr role="row">
        <td data-title={ln('number')}>
          {pageNumber && pageSize?(pageNumber - 1) * pageSize + index + 1: index + 1}
        </td>
        <td data-title={ln('province')}>{province || '-'}</td>
        <td data-title={ln('city')}>{city || '-'}</td>
        <td data-title={ln('locationName')}>{locationName || '-'}</td>
        <td data-title={ln('latitude')}>{latitude || '-'}</td>
        <td data-title={ln('longitude')}>{longitude || '-'}</td>
        <td data-title=" ">
          <button className="btn btn-primary"
            data-toggle="modal" data-target={`.location${id}`}>
            {ln('edit')}
          </button>
        </td>
        <td data-title={ln('delete')}>
          <label className="checkbox-container">
            <input type="checkbox"  />
            <span className="checkbox-checkmark"></span>
          </label>
          <FormGeneratorModal buttonText='editLocation' iconName="pencil"
            formId={`location${id}`} innerForm='locationModal' params={[id]} />
        </td>
      </tr>
    )
  }
}
