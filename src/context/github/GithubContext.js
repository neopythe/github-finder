import { createContext, useReducer } from 'react'

import axios from 'axios'

import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  // get search results
  const searchUsers = async (text) => {
    setLoading()

    const params = new URLSearchParams({
      q: text,
    })

    const {
      data: { items },
    } = await axios.get(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }

  // get single user
  const getUser = async (login) => {
    setLoading()

    const response = await axios.get(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })

    if (response.status === 404) window.location = '/notfound'
    else {
      const { data } = response
      dispatch({
        type: 'GET_USER',
        payload: data,
      })
    }
  }

  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' })

  const setLoading = () => dispatch({ type: 'SET_LOADING' })

  return (
    <GithubContext.Provider
      value={{ ...state, searchUsers, clearUsers, getUser }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
