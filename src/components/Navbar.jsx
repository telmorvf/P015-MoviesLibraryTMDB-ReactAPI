import './Navbar.css'

import { Link } from 'react-router-dom'
import { BiAlarm, BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'



const Navbar = () => {
  return (

    <nav id='navbar'>
      <h2>
        <Link to='/movies-library'><BiCameraMovie />Movies Library</Link>
      </h2>

      <h2>
        <Link to='/about'><BiAlarm />About</Link>
      </h2>

      <form>
        <input type="text" placeholder='Procurar um filme' />
        <button type='submit'>
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>

  )
}

export default Navbar
