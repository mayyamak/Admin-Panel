import React, { Component } from 'react'
import {push} from 'react-router-redux'
import {Link} from 'react-router'
import { baseRoute } from '../../../utils/route'
import {language, ln, dir} from '../../../utils/language'
import { siteConfig } from '../../../utils/siteConfig'

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <section className="content-header">
          <h1>
            {ln('about')}&nbsp;
            &nbsp;
              <small>{ln('controlPanel')}</small>
          </h1>
          <ol className="breadcrumb">
            <li><Link to={`/${baseRoute.active}`}>{ln('home')}</Link></li>
            <li className="active">{ln('about')}</li>
          </ol>
        </section>
        <section className="content" style={{direction: ln('direction')}}>
        <div className="box">
          <div className="box-body" style={{padding: 20, textAlign: 'justify', color: '#323232'}}>
            <h4>
              {ln('aboutus')}
            </h4>
            <hr/>
            <span>
              {language.key == 'fa'?
                <span></span>
                :
                <span></span>
            }
          </span>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
