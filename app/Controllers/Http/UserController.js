'use strict'

const User = use('App/Models/User')

class UserController {
  async signup ({ request, auth, response }) {

    const userData = request.only(['name', 'username', 'email', 'password'])

    try {
      // save user to db
      const user = await User.create(userData)
      // generate JWT token for user
      const token = await auth.generate(user)

      return response.json({
        status: 'success',
        data: token
      })
    } catch (err) {
      return response.status(400).json({
        status: 'error',
        message: 'There was a problem creating the user, please try again later.'
      })
    }
  }

  async login ({ request, auth, response }) {

    try {
      // validate the user credentials and generate a JWT token
      const token = await auth.attempt(
        request.input('email'),
        request.input('password')
      )

      return response.json({
        status: 'success',
        data: token
      })
    } catch (err) {
      response.status(400).json({
        status: 'error',
        message: 'Invalid email/password'
      })
    }
  }
}

module.exports = UserController
