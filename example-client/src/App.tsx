import React from 'react';
import logo from './logo.svg';
import './App.css';
import { sdk } from './lib/sdk.client';

function App() {
  const [email, setEmail] = React.useState<string>('')
  const [code, setCode] = React.useState<string>('')
  const [token, setToken] = React.useState<string>('')

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!code) {
      const res = await sdk.signinOrRegisterRequestForCode({ emailAddress: email })
      console.log(res)
      if (res.signinOrRegisterRequestForCode?.data) {
        alert('check your email for the 6-digit code')
      }
    } else {
      const res = await sdk.signinOrRegisterWithCode({ emailAddress: email, code })
      console.log(res)
      setToken(res.signinOrRegisterWithCode?.data ? res.signinOrRegisterWithCode?.data : '')
    }

  }

  return (
    <div className="App">
      <h3>Email address</h3>
      <p>{email}</p>
      <h3>Code</h3>
      <p>{code}</p>
      <h3>Token</h3>
      <p>{token}</p>
      <form onSubmit={submitForm}>
        <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="text" placeholder="code" onChange={(e) => setCode(e.target.value)} value={code} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
