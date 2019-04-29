import React, { Component } from 'react'
import UserInfo from './UserInfo'
import { getNormalizedDigit, } from '../../../utils/normalize'
import { capilizeString, } from '../../../utils/string'
import { cities, getProvinceName } from '../../../utils/cities'
import {language, ln, dir, swip, } from '../../../utils/language'
import {isArrayOK} from '../../../utils/array'
import { getIntlDate } from '../../../utils/date'

export default class UserInformation extends Component {
  render() {
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
                  <div className="inner-box-body">
                    <h3><i className="fa fa-user" aria-hidden="true"></i> &nbsp; {user[0].firstname} {user[0].lastname}</h3>
                    <div className="row text-grey" style={{ marginBottom: '10px' }}>

                      <UserInfo label="username" text={user[0].username} textClass={`en-for-fa-${dir('align')}`} />
                      <UserInfo label="email" text={user[0].email} textClass={`en-for-fa-${dir('align')}`} />

                      <UserInfo label="language" text={user[0].language && user[0].language.name} />
                      <UserInfo label="jender" text={user[0].jender} />
                      <UserInfo label="mobile" text={user[0].mobile} />
                      <UserInfo label="phone" text={user[0].phone} />
                      <UserInfo label="birthDate" text={user[0].birth_date} />
                      <UserInfo label="userLevel" text={user[0].user_level} />
                      <UserInfo label="userType" text={user[0].role && user[0].role.name} />
                      <UserInfo label="address" text={user[0].address} />
                      <UserInfo label="city" text={user[0].city && user[0].city.name} />
                      <UserInfo label="postalCode" text={user[0].postal_code} />
                      <UserInfo label="nationaCode" text={user[0].nationa_code} />
                      <UserInfo label="passportNo" text={user[0].passport_no} />
                      <UserInfo label="occupation" text={user[0].occupation} />

                    </div>
                  </div>
                </div>

              </div>

              <div className={`col-lg-3 col-md-12 user-${dir('align')}-box`} >
                {user && <div className="box inner-height">
                  <div className="box user-profile-box"
                    style={{ marginBottom: 0, textAlign: 'center', width: '100%', height: '100%' }}>
                    <div style={{ padding: '15px 25px 25px' }}>
                      <div className="profile-sidebar">
                        <img className="img-thumbnail"
                          src="/design/dist/img/mi.jpeg"
                          />
                        <div className={`row box-header user-box-header with-border
                          send-msg send-msg-${language.key} bg-${baseColor}`} >
                          <div className="col-xs-12">
                            <a style={{ color: 'white' }} href={`mailto:${user[0].email}`}>
                              <i className="fa fa-envelope" aria-hidden="true"></i>&nbsp; {ln('sendMessage')}
                            </a>
                          </div>
                        </div>
                      </div>
                      {(user) &&
                        <div>
                          {(user[0].firstname && user[0].lastname) &&
                            <h3>{capilizeString(user[0].firstname)}  {capilizeString(user[0].lastname)}</h3>
                          }
                          {user[0].email && <h5 className="en-for-fa text-overflow">{user[0].email}</h5>}
                        </div>
                      }
                    </div>
                  </div>
                </div>}
              </div>
            </div>
          }
        </div>

      </div>

    )
  }
}
