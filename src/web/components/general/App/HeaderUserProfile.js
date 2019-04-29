import React, { Component } from 'react'
import {Link} from 'react-router'
import { baseRoute } from '../../../../utils/route'
import { language, ln, dir } from '../../../../utils/language'
import { siteConfig } from '../../../../utils/siteConfig'

import profileImage from '../../../../../design/dist/img/profile-image.png'

export default class AppHeaderUserProfile extends Component {
  render() {
    const { userDataLoading, userData, } = this.props
    return (
      <li className="dropdown user user-menu">
        {
          //userDataLoading == false
          true?
          //userData
          true?
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-user-circle header-user-icon" />
              <span className="hidden-xs">مریم مختاری</span>
            </a>
            :
            <i />
          :
          <i className="fa fa-spin fa-circle-notch" style={{ marginRight: 60, marginTop: 17, color: 'white' }} />
        }
        <ul className="dropdown-menu">
          <li className="user-header">
            <i className="fa fa-user-circle text-white" style={{fontSize: 100}} />
            <p>
              مریم مختاری - اصفهان
              <small>عضو از اردیبهشت ۹۷</small>
            </p>
          </li>
          <li className="user-footer">
            <div className="pull-left">
              <a href="#" className="btn btn-default btn-flat">{ln('profile')}</a>
            </div>
            <div className="pull-right">
              <span className="btn btn-default btn-flat" onClick={() => {
                localStorage.removeItem('token')
                location.assign('/login')
              }}>{ln('signout')}</span>
            </div>
          </li>
        </ul>
      </li>
    )
  }
}
