function NavBar() {
  return (
    // NAVBAR
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Sweet Crumbled Supply</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products-featured">Featured Products</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar