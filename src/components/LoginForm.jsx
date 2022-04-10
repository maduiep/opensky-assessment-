import React, {useState} from 'react'

const LoginForm = ({ Login, error}) => {
  const [details, setDetails] = useState({
      username: '',
      email: '',
      password: ''
  })

  const submitHandler = (e) => {
      e.preventDefault()
      Login(details)
  }
  return (
    <form onSubmit={submitHandler}>
        <div className="inner-form">
            <h2>Login</h2>
            {(error !== "") ? (<div className="error">{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" 
                onChange={e => setDetails({...details, username: e.target.value})} value={details.username}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email"
                onChange={e => setDetails({...details, email: e.target.value})} value={details.email} 
                />
            </div>
            <div className="form-group">
                <label htmlFor="passwrod">Password</label>
                <input type="password" name="password" id="password" 
                onChange={e => setDetails({...details, password: e.target.value})} value={details.password}
                />
            </div>
            <input type="submit" value="LOGIN" />
        </div>
    </form>
  )
}

export default LoginForm