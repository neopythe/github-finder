import PropTypes from 'prop-types'
import { FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'

export default function RepoItem({ repo }) {
  const { name, description, html_url, forks, open_issues, stargazers_count } =
    repo

  return (
    <div className="card rounded-md mb-2 bg-gray-800 hover:bg-gray:900">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url}>
            <FaLink className="inline mr-4" />
            {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
          <div className="badge badge-outline badge-success badge-lg mr-2">
            <FaStar className="mr-2" /> {stargazers_count}
          </div>
          <div className="badge badge-outline badge-error badge-lg mr-2">
            <FaInfo className="mr-2" /> {open_issues}
          </div>
          <div className="badge badge-outline badge-warning badge-lg mr-2">
            <FaUtensils className="mr-2" /> {forks}
          </div>
        </div>
      </div>
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}
