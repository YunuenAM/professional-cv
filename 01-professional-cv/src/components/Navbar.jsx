const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-light' data-bs-theme='light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>Tech CV</a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarColor03' aria-controls='navbarColor03' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarColor03'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <a className='nav-link active' href='#'>Home
                  <span className='visually-hidden'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>School</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Experience</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Projects</a>
              </li>
              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' data-bs-toggle='dropdown' href='#' role='button' aria-haspopup='true' aria-expanded='false'>Let's connect</a>
                <div className='dropdown-menu'>
                  <a className='dropdown-item' href='#'>Email</a>
                  <a className='dropdown-item' href='#'>Phone</a>
                  <a className='dropdown-item' href='#'>Social Networking</a>
                  <div className='dropdown-divider' />

                </div>
              </li>
            </ul>
            <form className='d-flex'>
              <input className='form-control me-sm-2' type='search' placeholder='Search' />
              <button className='btn btn-secondary my-2 my-sm-0' type='submit'>Search</button>
            </form>
          </div>
        </div>
      </nav>

    </>
  )
}
export default Navbar
