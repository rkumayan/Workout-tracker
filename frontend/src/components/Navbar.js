import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="navbar">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar