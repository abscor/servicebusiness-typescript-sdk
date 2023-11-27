import { GraphQLClient } from 'graphql-request'

// import { getSdk, SdkFunctionWrapper } from './service.sdk'
import { getSdk, SdkFunctionWrapper } from './sdk'

export const LOGIN_URL = '/auth/login'
export const SIGNUP_URL = '/auth/register'
export const HOME_URL = '/app' // redirect after login
export const AUTH_ERROR_STRING = 'Authentication Error'

const loadItem = (key: string) => {
    try {
        return localStorage.getItem(key)
    } catch (e) {
        return null
    }
}

const saveItem = (key: string, value: string) => {
    try {
        localStorage.setItem(key, value)
    } catch (e) {
        // do nothing
    }
}

const config = {
    API_URL: 'http://localhost:8000/api/graph/',
    AUTH_TOKEN_STORAGE_KEY_NAME: 'token',
}

let failures = 0

let token = loadItem(config.AUTH_TOKEN_STORAGE_KEY_NAME)

if (token) {
  try {
    token = JSON.parse(token)
  } catch (e: any) {
    console.log('unable to parse token')
  }
}

const options = token && token !== 'undefined'
  ? {
      headers: {
        Authorization: `JWT ${token}`,
      },
    }
  : {}

const defaultWrapper: SdkFunctionWrapper = (
  action: any,
  _operationName: string,
) => {
  return action()
  .catch((e: any) => {
    console.log('wrapper error',e)
    failures++
    if (failures > 3) {
      failures = 0
      saveItem(config.AUTH_TOKEN_STORAGE_KEY_NAME, '')
      window.location.href = LOGIN_URL
    }
    // erase current token
    console.log('e', e)
    if (e.response.errors[0].message === AUTH_ERROR_STRING) {
      saveItem(config.AUTH_TOKEN_STORAGE_KEY_NAME, '')
      window.location.href = LOGIN_URL
    }
  })
}
export const sdk = getSdk(
  new GraphQLClient(config.API_URL, options),
  defaultWrapper,
)
