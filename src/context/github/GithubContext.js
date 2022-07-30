import { createContext, useReducer } from 'react'

import axios from 'axios'

import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  // get initial users (testing purposes)
  const fetchUsers = async () => {
    setLoading()
    const { data } = await axios.get(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
    dispatch({
      type: 'GET_USERS',
      payload: data,
    })
  }

  const setLoading = () => dispatch({ type: 'SET_LOADING' })

  return (
    <GithubContext.Provider value={{ ...state, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
