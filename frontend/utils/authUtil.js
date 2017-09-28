import auth0 from 'auth0-js'
import history from './history'

export default class Auth {
  constructor() {
    const authSettings = {
      domain: 'kevinkiklee.auth0.com',
      clientID: '2gVMUzuCovLtdpVhVkme7wgYI7Mm95GI',
      redirectUri: 'http://jobble.herokuapp.com/callback',
      audience: 'https://kevinkiklee.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid',
    }

    if (process.env.NODE_ENV !== 'production') {
      authSettings.redirectUri = 'http://localhost:3000/callback'
    }

    this.auth0 = new auth0.WebAuth(authSettings)

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        history.replace('/main')
      } else if (err) {
        history.replace('/')
      }
    })
  }

  setSession(authResult) {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    history.replace('/main')
  }

  login() {
    this.auth0.authorize()
  }

  logout() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    history.replace('/')
  }

  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}
