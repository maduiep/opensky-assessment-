import React, {useState} from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = {
    email: 'admin@opensky.api',
    password: 'admin01'
  }

  const [user, setUser] = useState({name: '', email: ''})
  const [error, setError] = useState('')

  const Login = details => {
    console.log(details)
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
