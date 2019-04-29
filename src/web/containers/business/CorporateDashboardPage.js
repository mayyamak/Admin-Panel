import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { connect } from 'react-redux'
import {language, ln, dir} from '../../../utils/language'
import {baseRoute} from '../../../utils/route'
import Loading from '../../components/general/Loading'
import DashboardBox from '../../components/general/DashboardBox'
import { siteConfig, } from '../../../utils/siteConfig'
const CircleOfPosition = ({ text }) => <div>{text}</div>

class CorporateDashboardPage extends Component {
  render() {
    const { userData, userDataLoading, } = this.props
    console.log('CorporateDashboardPage props', this.props);
    const data = {
      position: {
        lat: 35.6997432,
        lng: 51.3190960
      }
    }
    return userDataLoading?
      <Loading />
      :
      (
      <div>

        <section className="content">
          <div className="row" style={{marginTop: 50}}>
            <div className="col-md-2">
            </div>
            <div className="col-md-3">
              <div className="dashboard-box">
              <div className="shadow-text">
                {ln('magfaTitle')}
                <div className="shadow-text-after"></div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="dashboard-box">
                <div className="shadow-text">
                  {ln('specialOffers')}
                  <div className="shadow-text-after"></div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="mini-box">
                    </div>
                    <div className="mini-desc">
                      {ln('description')}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mini-box">
                    </div>
                    <div className="mini-desc">
                      {ln('description')}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mini-box">
                    </div>
                    <div className="mini-desc">
                      {ln('description')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{marginTop: 50}}>
            <div className="col-md-2">
            </div>
            <div className="col-md-3">
              <div className="dashboard-box">
              <div className="shadow-text">
                {ln('lastNews')}
                <div className="shadow-text-after"></div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="dashboard-box">
              <div style={{ height: '100%', width: '100%' }}>
                <GoogleMapReact
                 bootstrapURLKeys={{ key: 'AIzaSyCiLAqll37o6D3ZY-wUw7i_GPrcUQ3owFE'}}
                 defaultCenter={{
                   lat: data.position.lat,
                   lng: data.position.lng
                 }}
                 defaultZoom={15}
                 options={{
                   Zoom: 5,
                   scrollwheel: false,
                   MaxZoomService:15,
                   zoomControl: false
                 }}
                 >
                 <CircleOfPosition
                   lat={data.position.lat}
                   lng={data.position.lng}

                 />
                </GoogleMapReact>
              </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {userData, userDataLoading} = state.generalEntities

  return {
    userData, userDataLoading,
  }
}


export default connect(mapStateToProps)(CorporateDashboardPage)
