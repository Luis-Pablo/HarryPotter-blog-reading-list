
const Navbar = () => {
    return (
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/docs/5.2/assets/brand/bootstrap-logo.svg"
                        alt="Logo" width="30" height="24"
                        className="d-inline-block align-text-top" />
                        Bootstrap
                </a>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>

                        </ul>
                    </li>

                </ul>

            </div>
        </nav>
    )
}

export default Navbar;

