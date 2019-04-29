import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {push} from 'react-router-redux'
import md5 from 'md5'
import { baseRoute } from '../../../utils/route'
import {language, ln, dir} from '../../../utils/language'
import {
  loginAdmin,
} from '../../../actions'

class LoginPage extends Component {
  componentDidMount() {
    localStorage.removeItem('token')
  }
  async loginAdmin() {
    localStorage.removeItem('token')
    if (this.refs.username && this.refs.password && this.refs.username.value != '' && this.refs.password.value != '') {
      await this.props.loginAdmin(this.refs.username.value, md5(this.refs.password.value))
      if (this.props.isAdminAuthenticated) {
        console.log('isAdminAuthenticated');
        console.log('loginData', this.props.loginData);
        if (this.props.loginData && this.props.loginData.data && Array.isArray(this.props.loginData.data) && this.props.loginData.data.length
          && this.props.loginData.data[0].token) {
            localStorage.setItem('token', this.props.loginData.data[0].token)
            // localStorage.setItem('token', )
            // this.props.dispatch(push(`/${baseRoute.master}/dashboard`))
            if (this.props.loginData.data[0].rolename == 'admin') {
              location.assign('/admin/dashboard')
            } else {
              location.assign('/cadmin/dashboard')
            }
          }
      }
    } else {
      this.refs.username.style.borderColor = 'red'
      this.refs.password.style.borderColor = 'red'
    }
  }
  render() { return (
    <div className="login-body">
      <div className="login-container"></div>
  		<div className="grad"></div>
  		<br/>
  		<div className="login">
          <img src='/design/dist/img/tripema-logo.png' className="login-logo" />
  				<input type="text" placeholder="username" ref="username" style={this.refs.username && this.refs.username.value == ''?{borderColor: 'red'}:{}} /><br/>
  				<input type="password" placeholder="password" ref="password" style={this.refs.password && this.refs.password.value == ''? {borderColor: 'red'}:{}}/><br/>
  				<input type="button" value="Login" onClick= {() => this.loginAdmin()}/>
          {this.props.isAdminAuthenticated == false &&
            <div refs="error" className="login-error">
              Login failed!
            </div>
          }
      </div>
		</div>
  )}
}

const mapStateToProps = (state, ownProps) => {
  const {
    messageText, messageType, isAdminAuthenticated, loginData,
  } = state.masterEntities
  return {
    messageText, messageType, isAdminAuthenticated, loginData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {dispatch, ...bindActionCreators({
    loginAdmin,
  }, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
