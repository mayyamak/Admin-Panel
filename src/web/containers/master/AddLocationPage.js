import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router'
import {push} from 'react-router-redux'
import {
  // loadProvinces,
  loadCities, addLocation, addLocationBox,
} from '../../../actions'
import Loading from '../../components/general/Loading'
import Location from '../../components/general/Location'
import {provinces, } from '../../../utils/cities'
import {getCategoryColor, } from '../../../utils/color'
import {isValid, clear} from '../../../utils/form'
import {baseRoute} from '../../../utils/route'
import { siteConfig } from '../../../utils/siteConfig'
import { isArrayOK } from '../../../utils/array'
import {language, ln, dir} from '../../../utils/language'

class AddLocationPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: []
    }
  }
  addLocation() {
    console.log('addLocation', this.refs.location1.refs);
    let counter = 0
    const locations = []
    while (this.refs[`location${counter}`]) {
      const location = this.refs[`location${counter}`].refs
      counter++
      locations.push({locationName: location.locationName.value, latitude: location.latitude.value, longitude: location.longitude.value})
    }
    console.log('locations', locations);
    // this.refs.selectProvinceDiv && this.refs.selectProvinceDiv.classList.remove('tr-error')
    // this.refs.selectCityDiv && this.refs.selectCityDiv.classList.remove('tr-error')
    // let isFieldsValid = false
    // const isProvince = isValid(this.refs, 'province')
    // const isCity = isValid(this.refs, 'city')
    // if (isProvince && isCity) {
    //   isFieldsValid = true
    // }
    // if (isFieldsValid) {
    //   const provinceId = this.refs.province.value
    //   const cityId = this.refs.city.value
    //   this.props.addLocation(provinceId, cityId )
    // }
  }

  componentDidMount() {
    // this.props.loadProvinces()
    // this.props.loadCities()
  }
  componentDidUpdate() {
  }
  render() {
    const {
      // loadProvinces, loadCities,
      provincesLoading, citiesLoading, addLocationLoading,
      locationsCount,
    } = this.props
    const locationElements = Array.from({length: locationsCount}, (v, i) => i)
    console.log('AddLocationPage', this.refs.province, this.state.cities);
    return (
      <div>
        <section className="content-header">
          <h1>
            {ln('touristAttractions')}
            &nbsp;
              <small>{ln('controlPanel')}</small>
          </h1>
          <ol className="breadcrumb">
            <li><Link to={`/${baseRoute.master}`}>{ln('home')}</Link></li>
            <li><Link to={`/${baseRoute.master}/locations`}>{ln('touristAttractions')}</Link></li>
            <li className="active">{ln('newLocation')}</li>

          </ol>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="box">
                <div className={`box-header with-border bg-${siteConfig[siteConfig.key].headerBackground}`}>
                  <h3 className="box-title title-name" data-widget="collapse" style={{ cursor: 'pointer' }}>
                    {ln('addLocation')}
                  </h3>
                  <div className={`box-tools pull-${dir('reverseAlign')}`}>
                    <button type="button" className="btn btn-box-tool text-gray" data-widget="collapse">
                      <i className="fa fa-minus"></i>
                    </button>
                  </div>
                </div>
                <div className="box-body">
                <div className="row">
                <div className="col-lg-6">
                  <div className="col-lg-12">
                    <label className="col-sm-4"
                      htmlFor="province">{ln('province')}</label>
                    <div className="form-group col-sm-8" ref="provinceDiv">
                      {
                        provincesLoading?
                        <Loading />
                        :
                        <select className="form-control input-form"  ref="province"
                          onChange={() => this.setState({cities: provinces[this.refs.province.value].citiesNames})}//field.isRequired && isValid(this.refs, field.name)}
                          >
                          {provinces && provinces.map((item, index) =>
                            <option key={index} value={item.id}>{ln(item.name[language.key])}</option>
                          )}
                        </select>
                      }
                    </div>
                    </div>
                  <div className="col-lg-12">
                    <label className="col-sm-4"
                      htmlFor="city">{ln('city')}</label>
                    <div className="form-group col-sm-8" ref="cityDiv">
                      {
                        citiesLoading?
                        <Loading />
                        :
                        <select className="form-control input-form"  ref="city"
                          onChange={() => {}}//field.isRequired && isValid(this.refs, field.name)}
                          >
                          {this.state && this.state.cities && this.state.cities.map((item, index) =>
                            <option key={index} value={item.id}>{ln(item.name[language.key])}</option>
                          )}
                        </select>
                      }
                    </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group col-sm-8">
                      <button className={`btn btn-default white-button`}
                        onClick={() => this.props.addLocationBox()}
                        >{ln('addLocation')} &nbsp;
                        { addLocationLoading?
                          <i className="fa fa-circle-notch fa-spin" />
                          :
                          <i className="fa fa-plus" />
                        }
                      </button>
                    </div>
                    </div>
                  </div>
                  {locationElements.map(i => <Location key={i} ref={`location${i}`} />)}



                  <div className="col-lg-12">
                    <div className="form-group col-sm-8">
                      <button className={`btn btn-primary`}
                        disabled={addLocationLoading}
                        onClick={() => !addLocationLoading && this.addLocation()}
                        >{ln('submit')} &nbsp;
                        { addLocationLoading?
                          <i className="fa fa-circle-notch fa-spin" />
                          :
                          <i className="fa fa-check" />
                        }
                      </button>
                    </div>
                  </div>

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
  const {
    provincesLoading, citiesLoading, addLocationLoading,
    locationsCount
  } = state.masterEntities
  return {
    provincesLoading, citiesLoading, addLocationLoading,
    locationsCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {dispatch, ...bindActionCreators({
    // loadProvinces,
    loadCities, addLocation, addLocationBox,
  }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLocationPage)
