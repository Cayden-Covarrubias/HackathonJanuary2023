import React,{useState} from 'react'
import './App.css';
//import Profile from './mainPageComponents/ProfileComponent/Profile';
import Navbar from './mainPageComponents/Navbar.js'
//import Payment from './mainPageComponents/ProfileComponent/Payment';
//import HomePage from './mainPageComponents/HomePage';

function App() {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLogIn] = useState(false);

    const handleSubmit = ()=>{
      if(username==="satiwari"&& password ==="chero"){
      setLogIn(true);}
      else{
        setLogIn(false);
      }
    }

  return (
    <div>
    {!isLoggedIn?
    <div className="sign-in-page">
      <h1>Welcome, Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={event => setUsername(event.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <button type="submit" className="sign-in-button">
          Sign in
        </button>
      </form>
    </div>:
    <div>
      <Navbar />
          </div>}
    </div>
  );
}

export default App;
