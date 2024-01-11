import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-light' data-bs-theme='light'>
        <div className='container-fluid'>
          <NavLink className='navbar-brand' to='/'>Tech CV</NavLink>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarColor03' aria-controls='navbarColor03' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarColor03'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <NavLink className='nav-link active' to='/'>Home
                  <span className='visually-hidden'>(current)</span>
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/school'>Education</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/experience'>Experience & Skills</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/projects'>Projects</NavLink>
              </li>
              <li className='nav-item dropdown'>
                <NavLink className='nav-link dropdown-toggle' data-bs-toggle='dropdown' href='#' role='button' aria-haspopup='true' aria-expanded='false'>Let's Connect</NavLink>
                <div className='dropdown-menu'>
                  <NavLink className='dropdown-item' to='/email'>Email</NavLink>
                  <NavLink className='dropdown-item' to='/phone'>Phone</NavLink>
                  <NavLink className='dropdown-item' to='/socials'>Socials</NavLink>
                  <div className='dropdown-divider' />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}
export default Navbar
