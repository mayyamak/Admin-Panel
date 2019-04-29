import React from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

export function requireAuthentication(Component) {

  class AuthenticatedComponent extends React.Component {

    componentWillMount() {
      this.checkAuth();
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth();
    }

    checkAuth() {
      if (!localStorage.getItem('token')) {
        // let redirectAfterLogin = this.props.location.pathname;
        location.assign('/login')
      }
    }

    render() {
      return (
        <div>
        {localStorage.getItem('token')
          ? <Component {...this.props}/>
          : null
        }
        </div>
      )

    }
  }

  const mapStateToProps = (state) => ({
    // token: state.masterEntities.token,
    // username: state.masterEntities.username,
    // isAdminAuthenticated: state.masterEntities.isAdminAuthenticated
  });

  return connect(mapStateToProps)(AuthenticatedComponent);

}
