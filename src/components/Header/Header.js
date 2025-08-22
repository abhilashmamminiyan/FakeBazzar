import styles from './Header.module.css';
import {useContext} from 'react';
import { NavLink, Link, useNavigate, useLocation} from 'react-router-dom';
import AuthContext from '../../Contexts/AuthContext';
import SearchContext from '../../Contexts/SearchContext';
import { Cart } from "react-bootstrap-icons";
import CartContext from '../../Contexts/CartContext';

function Header() {
    const { user, logout } = useContext(AuthContext);
    const { searchTerm, setSearchTerm } = useContext(SearchContext);
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
        navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
    }
    };
    const handleLogout = () => {
        logout();
        navigate("/login");
    };
    return (
        <div className={styles.header}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Fake Bazzar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
                            <li className="nav-item me-3">
                                <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link active" aria-current="page" to="/products">Products</NavLink>
                            </li>
                            <li><div className={styles.searchBar}>
                                <form className="d-flex" role="search" onSubmit={handleSearch}>
                                    <input className="form-control me-2" 
                                    type="search" placeholder="Search" 
                                    aria-label="Search" 
                                    onChange={(e)=> setSearchTerm(e.target.value)} 
                                    required />
                                    <button className="btn btn-outline-success" 
                                    type="submit">Search</button>
                                </form>
                                </div>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link active" aria-current="page" to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink className="nav-link active" aria-current="page" to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center ms-auto">
                            {user ? (
                            <>
                                <span className="me-3">Welcome, {user.username} 👋</span>
                                <button className="btn btn-outline-danger btn-sm" onClick={handleLogout} >
                                Logout
                                </button>
                            </>
                            ) : (
                                location.pathname !== "/login" && (
                                    <Link className="btn btn-outline-primary me-3" to="/login">
                                        Log In
                                    </Link>
                                )
                            )}

                        <NavLink to="/cart" className="nav-link position-relative ms-3">
                            <Cart size={22} />
                            {cart.length > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart.length}
                            </span>
                            )}
                        </NavLink>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Header;