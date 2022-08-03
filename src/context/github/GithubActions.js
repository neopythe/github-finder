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
