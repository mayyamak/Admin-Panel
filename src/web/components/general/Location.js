import React, { Component } from 'react'
import {Link} from 'react-router'
import {isValid, clear} from '../../../utils/form'
import {language, ln, dir} from '../../../utils/language'
import {baseRoute} from '../../../utils/route'

export default class Location extends Component {
  render() {
    return (
        <div className="col-lg-6">
          <div className="box inner-box">
            <div className="box-header with-border">
              <div className="box-tools pull-left">
                <button type="button" className="btn btn-box-tool margin-top-negative" data-widget="collapse">
                  <i className="fa fa-minus"></i>
                </button>
                <button type="button" className="btn btn-box-tool margin-top-negative" data-widget="remove">
                  <i className="fa fa-remove"></i>
                </button>
              </div>
            </div>
            <div className="box-body">
              <div>
                <label className="col-sm-4"
                  htmlFor="locationName">{ln('locationName')}</label>
                <div className="form-group col-sm-8" ref="locationNameDiv">
                  <input className="form-control input-form"
                    id="locationName" ref="locationName"
                    onChange={() => isValid(this.refs, 'locationName')}
                    />
                </div>
              </div>
              <div>
                <label className="col-sm-4"
                  htmlFor="latitude">{ln('latitude')}</label>
                <div className="form-group col-sm-8" ref="latitudeDiv">
                  <input className="form-control input-form"
                    id="latitude" ref="latitude"
                    type="number"
                    onChange={() => isValid(this.refs, 'latitude')}
                    />
                </div>
              </div>
              <div>
                <label className="col-sm-4"
                  htmlFor="longitude">{ln('longitude')}</label>
                <div className="form-group col-sm-8" ref="longitudeDiv">
                  <input className="form-control input-form"
                    id="longitude" ref="longitude"
                    type="number"
                    onChange={() => isValid(this.refs, 'longitude')}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
