import { GraphQLClient } from 'graphql-request'
import { getSdk, SdkFunctionWrapper } from './sdk'
import { getItem, setItem } from './storage'

export const LOGIN_URL = '/login'
export const SIGNUP_URL = '/login'
export const HOME_URL = '/dashboard-home' // redirect after login
export const AUTH_ERROR_STRING = 'Authentication Error'

const config = {
    API_URL: 'https://servicebusiness.co/api/graph/',
    AUTH_TOKEN_STORAGE_KEY_NAME: 'token',
}

let failures = 0

let token = getItem(config.AUTH_TOKEN_STORAGE_KEY_NAME)

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
    // alert(
    //   JSON.stringify(options) + '-1-' + _operationName + '-2-' + action
    // )
    console.log('wrapper error',e)
    // failures++
    // if (failures > 3) {
    //   failures = 0
    //   setItem(config.AUTH_TOKEN_STORAGE_KEY_NAME, '')
    //   window.location.href = LOGIN_URL
    // }
    // // erase current token
    // alert(e)
    // console.log('e', e)
    // if (e.response.errors[0].message === AUTH_ERROR_STRING) {
    //   setItem(config.AUTH_TOKEN_STORAGE_KEY_NAME, '')
    //   window.location.href = LOGIN_URL
    // }
  })
}
export const sdk = getSdk(
  new GraphQLClient(config.API_URL, options),
  defaultWrapper,
)
