import spinner from './assets/spinner.gif'

function Spinner() {
  return (
    <div className="w-full mt-20">
      <img
        className="w-16 text-center mx-auto"
        src={spinner}
        alt="Loading..."
      />
    </div>
  )
}

export default Spinner
