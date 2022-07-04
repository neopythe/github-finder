function About() {
  return (
    <>
      <h1 className="text-6xl mb-4 text-white">GitHub Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app for searching GitHub profiles and viewing profile details.
        This project is part of the
        <strong>
          <a
            href="https://www.udemy.com/course/react-front-to-back-2022/"
            className="text-white"
          >
            {' '}
            React Front To Back 2022
          </a>{' '}
        </strong>
        Udemy course by
        <strong>
          <a href="https://traversymedia.com" className="text-white">
            {' '}
            Brad Traversy
          </a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout by&nbsp;
        <a className="text-white" href="https://twitter.com/hassibmoddasser">
          Hassib Moddasser
        </a>
      </p>
    </>
  )
}

export default About
