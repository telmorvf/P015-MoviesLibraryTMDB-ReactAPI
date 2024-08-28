import './Navbar.css'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiAlarm, BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'



const Navbar = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log(search)
    if (!search) return

    navigate(`/search?q=${search}`)
    setSearch('')
  }

  return (

    <nav id='navbar'>
      <h2>
        <Link to='/P015-MoviesLibraryTMDB-ReactAPI'><BiCameraMovie />Movies Library</Link>
      </h2>

      <h2>
        <Link to='/about'><BiAlarm />About</Link>
      </h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Procurar um filme' onChange={(e) => setSearch(e.target.value)} value={search} />
        <button type='submit'>
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>

  )
}

export default Navbar
