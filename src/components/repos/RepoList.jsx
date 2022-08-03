import PropTypes from 'prop-types'

import RepoItem from './RepoItem'

export default function RepoList({ repos }) {
  return (
    <div className="card rounded-lg shadow-lg bg-base-100">
      <div className="card-body">
        <h2 className="card-title text-3xl my-4 font-bold">
          Latest repositories
        </h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  )
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
}
