function Header() {
  return (
    // HEADING
    <header className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="./img/header.jpg" className="d-block mx-lg-auto img-fluid" alt="Assorted baking tools and ingredients" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Sweet Crumbled Supply</h1>
          <p className="lead">
            Important tools you need to bake something great at home. Shop our favorite
            tools chosen by bakers for bakers.
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header