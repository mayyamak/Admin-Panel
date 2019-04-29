import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import {language, ln, dir} from '../../../utils/language'
import {baseRoute} from '../../../utils/route'
import Loading from '../../components/general/Loading'
import DashboardBox from '../../components/general/DashboardBox'
import { siteConfig, } from '../../../utils/siteConfig'

export default SupportPage = () => (
      <div>
        <section className="content">
          <div style={{padding: '200px calc(50% - 100px)', lineHeight: 5,}}>
            {ln('onlineSupport')}
            <div><img src="/design/dist/img/tripema-logo-review.png"  /></div>
          </div>
        </section>
      </div>
    )
