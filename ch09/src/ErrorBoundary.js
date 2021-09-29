import React, { Component } from 'react'
import ErrorScreen from './ErrorScreen'

export default class ErrorBoundary extends Component {
  state = { error: null, errorInfo: null }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    const { error, errorInfo } = this.state
    const { children, fallback } = this.props

    if (error) return <ErrorScreen error={error} errorInfo={errorInfo} />

    return children
  }
}
