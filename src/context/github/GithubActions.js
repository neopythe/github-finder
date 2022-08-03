import axios from 'axios'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

// get search results
export const searchUsers = async (text) => {
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

  return items
}

// get single user
export const getUser = async (login) => {
  const response = await axios.get(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  })

  if (response.status === 404) window.location = '/notfound'
  else {
    const { data } = response
    return data
  }
}

// get user repos
export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  })

  const { data } = await axios.get(
    `${GITHUB_URL}/users/${login}/repos?${params}`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    }
  )
  return data
}
