import React, {useState} from "react";
import AdminTable from "./components/AdminTable";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = {
    username: 'admin',
    password: 'admin01'
  }

  const [user, setUser] = useState({name: '', email: ''})
  const [error, setError] = useState('')

  const Login = details => {
    console.log(details)

    if (  details.username === adminUser.username && details.password ===     adminUser.password) {
      console.log('Logged IN')
      setUser({
        username: details.username,
        password: details.password
      })
    } else {
      console.log('Details do not match')
      setError('Details do not match')
    }
  }

  const Logout = () => {
    console.log('Logout')
    setUser({
        username: '',
        password: ''
    })
  }
  return (
    <div className="App">
      {(user.username !== "") ? (
        <AdminTable />
      ): (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
