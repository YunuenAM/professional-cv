const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-light' data-bs-theme='light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>Tech CV</a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarColor03' aria-controls='navbarColor03' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarColor03'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <a className='nav-link active' href='/'>Home
                  <span className='visually-hidden'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/school'>Education</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/experience'>Experience & Skills</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/projects'>Projects</a>
              </li>
              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' data-bs-toggle='dropdown' href='#' role='button' aria-haspopup='true' aria-expanded='false'>Let's Connect</a>
                <div className='dropdown-menu'>
                  <a className='dropdown-item' href='/email'>Email</a>
                  <a className='dropdown-item' href='/phone'>Phone</a>
                  <a className='dropdown-item' href='/socials'>Socials</a>
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
