import React, { Component } from 'react'
import UserInfo from './UserInfo'
import { getNormalizedDigit, } from '../../../utils/normalize'
import { capilizeString, } from '../../../utils/string'
import { cities, getProvinceName } from '../../../utils/cities'
import {language, ln, dir, swip, } from '../../../utils/language'
import {isArrayOK} from '../../../utils/array'
import { getIntlDate } from '../../../utils/date'

export default class CompanyInformation extends Component {
  render() {
    console.log('companyInformation props : ', this.props)
    const { user, baseColor, userLoading, } = this.props
    return (
      <div id="about" className="tab-pane active">
        <div>
          {
            isArrayOK(user) &&
            <div className="user-profile-box">
              <div className="user-box col-lg-9 col-md-12">
                <div className="box-body user-box-body">
                  {user[0].company &&
                    <div className="inner-box-body company-info">
                      <h3><i className="fa fa-university" aria-hidden="true"></i> &nbsp; {ln('companyInformation')}</h3>
                      <div className="row text-grey">
                        <UserInfo label="customerType" text={user[0].company.type} textClass="text-blue" />
                        <UserInfo label="company" text={user[0].company.name} />
                        <UserInfo label="companyNationalCode" text={user[0].company.nationalCode} />
                        <UserInfo label="companyStaffCount"
                          text={ln('companyCount')[user[0].company.staffCount]}
                          condition={user[0].company.staffCount} />
                        <UserInfo label="businessCode" text={user[0].company.businessCode} />
                        <UserInfo label="registrationNo" text={user[0].company.registrationNo} />
                        <UserInfo label="phone" text={user[0].company.phone} />
                        <UserInfo label="email" text={user[0].company.email} />
                        <UserInfo label="address" text={user[0].company.address} />
                        <UserInfo label="fax" text={user[0].company.fax} />
                      </div>
                    </div>
                  }
                </div>

              </div>


            </div>
          }
        </div>

      </div>

    )
  }
}
