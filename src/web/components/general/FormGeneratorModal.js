import React, { Component } from 'react'
import DatePicker from 'react-datepicker2'
import 'react-datepicker2/dist/react-datepicker2.min.css'
import GoogleMapReact from 'google-map-react'
import {getNormalizedDigit, } from '../../../utils/normalize'
import {isValid, clear} from '../../../utils/form'
import {baseRoute} from '../../../utils/route'
import {siteConfig} from '../../../utils/siteConfig'
import {formFields} from '../../../utils/formFields'
import Loading from './Loading'
import { language, ln, dir } from '../../../utils/language'
const CircleOfPosition = ({ text }) => <div>{text}</div>

export default class FormGeneratorModal extends Component {
  constructor(props) {
    super(props)
    this.state = {isEyeOpened: false,
                  activeStep: 1}
  }
  checkBalance(val, defaultVal) {
    this.refs.defaultBalance.innerText =  getNormalizedDigit(Number(val) + Number(defaultVal)) + ' ' + ln('irr')
  }
  isDateValid(value, inputname) {

    if (value) {
      this.refs[inputname+'Div'].classList.remove('has-error')
      return true
    } else {
      this.refs[inputname+'Div'].classList.add('has-error')
      return false
    }
  }

  async doAdvancedSearch(submitParams) {
    const {innerForm, setSearchParams} = this.props
    const searchParams = formFields[innerForm].map((item, index) => ({
      type: item.searchParam || item.name, value: submitParams[index],
    }))
    if (submitParams) {
      await setSearchParams(searchParams)
    }
    const  {loadData, pageNumber, pageSize, sortColumn, isAscending, lastParams,
     } = this.props
    loadData(pageNumber, pageSize, sortColumn, isAscending, searchParams, lastParams, )
  }
  render() {
    const {buttonText, innerText, innerForm, formId, submitAction, iconName, params,
      selectData, selectLoading, isAlarm, defaultValues, isSearchForm, isSearchLoading,
      handlers,
    } = this.props
    console.log('FormGeneratorModal props', this.props, handlers, handlers && handlers.changeStep);
    const data = {
      position: {
        lat: 35.6997432,
        lng: 51.3190960
      }
    }
    return (
      <div className={isSearchForm? '' : `modal fade modal-div ${formId || innerForm}`}
        tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
        <div className="modal-dialog modal-lg" role="document" style={isSearchForm && {marginTop: 0}}>
          <div className="modal-content">
            {!isSearchForm &&
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                { innerForm == 'resortModal'?
                  <div className="row">
                    <h4 className="col-md-5 modal-title">{ln(buttonText)}</h4>
                    <div className="col-md-6">
                      {[...Array(5).keys()].map(i=>
                        <div key={i} className={`step ${(i + 1) <= this.state.activeStep && 'step-active'}`}
                            style={this.state.activeStep > (i + 1)? {opacity: 0.5} : {}}
                            onClick={() =>  this.setState({activeStep: i + 1})}>
                          {i + 1}
                        </div>
                      )}

                    </div>
                  </div>
                  :
                  <h4 className="modal-title">{ln(buttonText)}</h4>
                }
              </div>
            }
            <div className="modal-body" style={isSearchForm && {padding: 0}}>
              {innerText?
                <p>{ln(innerText)}</p>
                :
                <form role="form" className="form-horizontal">

                  {formFields[innerForm] &&
                    <div className="box-body">
                      {
                        (this.state.activeStep == 2)?
                          <div style={{ height: '50vh', width: '100%' }}>
                            <GoogleMapReact
                             bootstrapURLKeys={{ key: 'AIzaSyCiLAqll37o6D3ZY-wUw7i_GPrcUQ3owFE'}}
                             defaultCenter={{
                               lat: data.position.lat,
                               lng: data.position.lng
                             }}
                             defaultZoom={15}
                             options={{
                               Zoom: 15,
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
                           :
                         formFields[innerForm].map((field, index) => {
                        return (
                             (!field.stepId || field.stepId == this.state.activeStep) &&
                          <div key={index} className={`form-group ${isSearchForm && 'col-md-6 col-sm-12'}`}
                            style={isSearchForm && {marginBottom: 10}}
                            ref={`${field.name}Div`}>
                            <label className={`${isSearchForm?'col-sm-4':'col-md-2 col-sm-4'} control-label`}
                              htmlFor={field.name}>{ln(field.displayName || field.name)}
                            </label>
                              <div className={isSearchForm?'col-sm-8':'col-md-10 col-sm-8'}>
                                {
                                  field.type == 'select' &&
                                  (
                                    selectLoading && selectLoading[field.name]?
                                    <Loading />
                                    :
                                    <select className="form-control input-form"  ref={field.name}
                                      defaultValue={defaultValues && defaultValues[field.name]}
                                      onChange={() => field.isRequired && isValid(this.refs, field.name)}
                                      // disabled={field.readOnlyOnEdit && defaultValues && defaultValues[field.name]}
                                      >
                                      {field.isNullRequired &&
                                        <option value=''>---</option>
                                      }
                                      {selectData && selectData[field.name] && selectData[field.name].map((item, index) =>
                                        <option key={index} value={item.value == null? item.name: item.value}>{ln(item.name)}</option>
                                      )}
                                    </select>
                                  )
                                }
                                {field.type == 'checkbox' &&
                                <label style={{display: 'inline'}} className="checkbox-container col-lg-1">
                                  <input type="checkbox"
                                    defaultChecked={defaultValues && defaultValues[field.name]}
                                    />
                                  <span className="checkbox-checkmark"></span>
                                </label>
                                }
                                {field.type == 'label' &&
                                  <div className="text-light-blue"
                                    style={{marginTop: 10}}
                                     ref={field.name}>
                                    {defaultValues && getNormalizedDigit(defaultValues[field.name]) + '  IRR'}
                                  </div>
                                }
                                {
                                  field.type == 'checkBoxList' &&
                                    field.items.map((item, index) => (
                                      <div key={index}>
                                        <label  className="col-lg-2 facility-text">
                                          {ln(item.name)}
                                          <i className={`facility-icon fa fa-${item.icon}`} />
                                        </label>
                                        <label style={{display: 'inline'}} className="checkbox-container col-lg-1">
                                          <input type="checkbox"  />
                                          <span className="checkbox-checkmark"></span>
                                        </label>
                                      </div>
                                    ))
                                }
                                {field.type == 'textarea' &&
                                  <textarea
                                    className="form-control input-form search-field" rows="3"
                                     ref={field.name}
                                    defaultValue={defaultValues && defaultValues[field.name]}
                                    placeholder={field.placeholder}
                                    onChange={()=>field.isRequired && isValid(this.refs, field.name)}
                                    />
                                }
                                {(field.type == 'text' || field.type == 'password' || field.type == 'number' || !field.type)
                                  &&
                                  <span>
                                    <input className="form-control input-form search-field"
                                       ref={field.name}
                                       min={0}
                                      defaultValue={defaultValues && defaultValues[field.name]}
                                      type={field.type? field.type == 'password'?
                                        this.state.isEyeOpened? `text` :`password`: field.type: 'text'}
                                      placeholder={field.placeholder}
                                      onChange={(e)=>
                                        field.name == 'balance'?
                                        this.checkBalance(e.target.value, defaultValues && defaultValues['defaultBalance'])
                                        : field.isRequired && isValid(this.refs, field.name)}
                                    />

                                    {field.type == 'password' &&
                                      <span className={`fa fa-eye eye ${!this.state.isEyeOpened && 'text-gray'}`}
                                        style={{[dir('reverseAlign')]: 25}}
                                        onClick={() => {
                                          this.setState({isEyeOpened: !this.state.isEyeOpened})
                                        }}>
                                      </span>
                                    }
                                  </span>
                                }
                                {
                                  field.type == 'date' &&
                                  <DatePicker
                                    onChange={value => this.setState({ value })}
                                    value={this.state.value}
                                  />
                                }
                              </div>
                          </div>
                        )
                      })}
                    </div>
                  }
                </form>

              }
            </div>
            <div className={isSearchForm? '' : 'modal-footer'}>

              {!isAlarm &&
                <button type="button" id="submitButton" className={`btn btn-${'primary'}`}
                  disabled={isSearchLoading && isSearchForm}
                  style={isSearchForm && {margin: '-5px 10px 10px 10px'}}
                  onClick={() => {

                    let submitParams = params? params: []
                    let isValidated = true
                    if (!innerText) {
                      // isValidated = formFields[innerForm] && formFields[innerForm].every(field => !field.isRequired || isValid(this.refs, field.name))
                      formFields[innerForm] && formFields[innerForm].forEach(field =>
                        isValidated = isValidated & (!field.isRequired ||
                          (field.type == 'date'? this.isDateValid(this.state[field.name], field.name): isValid(this.refs, field.name)
                        )))
                        if(isValidated) {
                          submitParams = [...submitParams, ...formFields[innerForm].map(field =>
                            field.type == 'checkbox'? this.refs[field.name].checked :
                            field.type == 'date'? this.state[field.name] :
                            this.refs[field.name].value)
                          ]
                        }
                      }
                      console.log('submitAction:', submitParams, submitAction);
                      if (isSearchForm) {
                        !isSearchLoading && submitParams && submitParams.length
                        && !submitParams.every(item => item == "") && this.doAdvancedSearch(submitParams)
                      } else {
                        if (isValidated) {
                          submitAction(...submitParams)
                          $('.modal-div').modal('hide')
                        }
                      }
                    }}>{ln(buttonText)} &nbsp;
                    {isSearchLoading && isSearchForm?
                      <i className="fa fa-spin fa-circle-notch"></i>
                      :
                      <i className={`fa fa-${iconName}`} />
                    }
                </button>
              }
              {isSearchForm &&
                <button type="button" className={`btn btn-default ${isSearchLoading && 'hide'}`} data-dismiss="modal"
                  style={{margin: '-5px 10px 10px 10px'}} data-widget="collapse"
                  onClick={() =>  {
                    formFields[innerForm].map((field, index) => {
                      clear(this.refs, field.name)
                    })
                    this.doAdvancedSearch([])
                  }}
                  >{ln('cancel')}</button>
              }
              {!isSearchForm &&
                <button type="button" className="btn btn-default pull-left" data-dismiss="modal">{ln('close')}</button>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
