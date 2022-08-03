import { useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'
import normalizeUrl from 'normalize-url'

import GithubContext from '../context/github/GithubContext'

import RepoList from '../components/repos/RepoList'
import Spinner from '../components/layout/Spinner'

export default function User() {
  const { getUser, user, loading, getUserRepos, repos } =
    useContext(GithubContext)

  const params = useParams()

  useEffect(() => {
    getUser(params.login)
    getUserRepos(params.login)
  }, [])

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user

  const blog_url = blog ? normalizeUrl(String(blog), { forceHttps: true }) : ''

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back to search
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 mb-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="card-body justify-end gap-0">
                <h2 className="card-title mb-0 text-white">{name}</h2>
                <p className="flex-grow-0 text-white">{login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="card-title text-3xl">
                {name}
                <div className="badge badge-outline badge-success ml-2 mr-1">
                  {type}
                </div>
                {hireable && (
                  <div className="badge badge-outline badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="card-actions mt-4">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit GitHub profile
                </a>
              </div>
            </div>
            <div className="stats w-full rounded-lg shadow-md bg-base-100">
              <div className="grid grid-cols-1 xl:grid-cols-2">
                {location && (
                  <div className="stat">
                    <div className="stat-title text-md">Location</div>
                    <div className="stat-value text-lg"></div>
                    {location}
                  </div>
                )}
                {blog && (
                  <div className="stat">
                    <div className="stat-title text-md">Website</div>
                    <div className="stat-value text-lg">
                      <a
                        href={blog_url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold"
                      >
                        {blog_url.replace('https://', '')}
                      </a>
                    </div>
                  </div>
                )}
                {twitter_username && (
                  <div className="stat">
                    <div className="stat-title text-md">Twitter</div>
                    <div className="stat-value text-lg">
                      <a
                        href={`https://twitter.com/${twitter_username}`}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold"
                      >
                        {twitter_username}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="stats w-full py-5 mb-6 rounded-lg shadow-md bg-base-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUsers className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Followers</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {followers}
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUserFriends className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Following</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {following}
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaCodepen className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Public repos</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_repos}
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaStore className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Public gists</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_gists}
              </div>
            </div>
          </div>
        </div>
        <RepoList repos={repos} />
      </div>
    </>
  )
}
