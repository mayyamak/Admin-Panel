import React, { Component } from 'react'
import {Link} from 'react-router'
import {language, ln, dir} from '../../../utils/language'
import {baseRoute} from '../../../utils/route'

export default class DashboardBox extends Component {
  render() {
    const {title, icon, color} = this.props
    const sublink = this.props.sublink || this.props.title
    const arrowIcon = `fa-arrow-circle-${dir('reverseAlign')}`
    return (
      <div className="col-lg-3 col-xs-6">
        <div className={`small-box bg-white`}  style={{boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.1)"}}>
          <div className="inner">
            <h3>&nbsp;</h3>
            <p>
              <Link to={`/${baseRoute.active}/${sublink}`} className="green-link bigger-font">
                {ln(title)}
              </Link>
            </p>
          </div>
          <div className="icon">
            <Link to={`/${baseRoute.active}/${sublink}`} className="icon-link">
              <i className={`fa fa-${icon}`}></i>
            </Link>
          </div>
          <Link to={`/${baseRoute.active}/${sublink}`} className="small-box-footer">
            {ln('moreinfo')} <i className={`fa ${arrowIcon}`}></i>
          </Link>
        </div>
      </div>
    )
  }
}
