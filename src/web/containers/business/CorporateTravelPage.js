import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import {language, ln, dir} from '../../../utils/language'
import {baseRoute} from '../../../utils/route'
import Loading from '../../components/general/Loading'
import DashboardBox from '../../components/general/DashboardBox'
import { siteConfig, } from '../../../utils/siteConfig'

const data = {
  title: 'چگونه سفری راحت تر داشته باشیم؟',
  text: 'هر سفری با خود تصمیمات مهمی راهم به دنبال دارد که برای شروع سفر باید تصمیم گیری شده و انتخاب کنیم. اینکه به کجا یا کدام کشور قصد رفتن داریم، چه زمانی در سفر خواهیم بود و چه زمانی باید به برگشتن به خانه فکر کنیم و مهم تر از همه این موضوعات بلیط هواپیما و خرید آن است. اما در واقع پس از این تصمیمات، اتفاقات، کارها و تصمیم های کوچک ما هستند که سفر را راحت تر و کم تنش تر می کنند.',
  image: 'trip.jpg',
}


export default CorporateTravelPage = () => (
      <div>
        <section className="content">
          <div className="row">
            <div className="col-md-offset-2 col-md-7">
              <div className="title">
                {data.title}
              </div>
              <div className="text">
                {data.text}
                <div className="text">
                  <img src={`/design/dist/img/${data.image}`}  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
