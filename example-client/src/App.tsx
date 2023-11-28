import React from 'react';
import logo from './logo.svg';
import './App.css';
import { sdk } from './lib/sdk.client';

function App() {
  const [email, setEmail] = React.useState<string>('')
  const [code, setCode] = React.useState<string>('')
  const [token, setToken] = React.useState<string>('')
  const [preview, setPreview] = React.useState<string>('')

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

      // image upload example below, upon selecting a file set the image preview with the base64 encoded image
      <h3>Image upload</h3>
      <input type="file" onChange={(e) => {
        const file = e.target.files?.[0]
        if (file) {
          const reader = new FileReader()
          reader.onload = (e) => {
            const result = e.target?.result
            if (typeof result === 'string') {
              setPreview(result)
            }
          }
          reader.readAsDataURL(file)
        }
      }} />
      <img src={preview} alt="preview" style={{width: 100}}/>
      
      <button onClick={() => setPreview('')}>Remove preview</button>
    </div>
  );
}

export default App;
