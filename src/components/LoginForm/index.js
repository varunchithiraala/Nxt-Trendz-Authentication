// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isSubmitError: false,
    errorMessage: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    this.setState({isSubmitError: true, errorMessage})
  }

  onClickSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <div className="input-container">
        <label className="label-input" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="input"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </div>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <div className="input-container">
        <label className="label-input" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="input"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </div>
    )
  }

  renderErrorMessage = () => {
    const {errorMessage} = this.state
    return <p className="error-message">*{errorMessage}</p>
  }

  render() {
    const {isSubmitError} = this.state

    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.onClickSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-logo-desktop-image"
            alt="website logo"
          />
          {this.renderUsername()}
          {this.renderPassword()}
          <button type="submit" className="login-button">
            Login
          </button>
          {isSubmitError && this.renderErrorMessage()}
        </form>
      </div>
    )
  }
}

export default LoginForm
