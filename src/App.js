import React, {useState} from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = {
    username: 'admin',
    email: 'admin@opensky.api',
    password: 'admin01'
  }

  const [user, setUser] = useState({name: '', email: ''})
  const [error, setError] = useState('')

  const Login = details => {
    console.log(details)

    if (details.email === adminUser.email && details.password === adminUser.password && details.username === adminUser.username) {
      console.log('Logged IN')
      setUser({
        username: details.username,
        email: details.email,
        password: details.password
      })
    } else {
      console.log('Details do not match')
     
    }
  }

  const Logout = () => {
    console.log('Logout')
  }
  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="admin">
          <h2>Welcome, <span>{user.username}</span></h2>
          <button>Logout</button>
        </div>
      ): (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
