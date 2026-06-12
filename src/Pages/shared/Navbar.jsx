import { Link } from 'react-router-dom'

function Navbar() {

return (
<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid fs-5">
            {/* <Link className="navbar-brand fs-3" to="/">Our Store</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse fw-light" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-5">
                    <li className="nav-item px-3">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown px-3">
                        <Link className="nav-link dropdown-toggle" to="/products" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/mugs">Mugs</Link></li>
                            <li><Link className="dropdown-item" to="/tshirts">T-shirts</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" to="/products">All Products</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item px-3">
                        <Link className="nav-link" to="/cart">Cart</Link>
                    </li>
                    <li className="nav-item px-3">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
            </div>
        </div>
    </nav>
</>
);
}

export default Navbar;