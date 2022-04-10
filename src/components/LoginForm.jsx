import React, {useState} from 'react'

const LoginForm = ({ Login, error}) => {

  return (
    <form>
        <div className="inner-form">
            <h2>Login</h2>
            {}
            <div className="form-group">
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" />
            </div>
            <div className="form-group">
                <label htmlFor="passwrod">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <input type="submit" value="LOGIN" />
        </div>
    </form>
  )
}

export default LoginForm