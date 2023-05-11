import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import AuthenticatedService from './AuthenticatedService'


class AuthenticatedRoute extends Component {
  render() {
    if (AuthenticatedService.isUserLoggedIn()) {
      return {...this.props.children}
    } else {
      return <Navigate to="/login" />
    }
  }
}

export default AuthenticatedRoute