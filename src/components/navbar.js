import React from 'react';
import { Link, useLocation } from 'react-router-dom';    
import logo from '../assets/ranav_logo.png';
const phone = "tel:+91826662666";

export default function NavBbar() {
    const location = useLocation();
    const getActiveClass = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" className="logo" /> 
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${getActiveClass('/')}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${getActiveClass('/about')}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={`nav-link dropdown-toggle ${getActiveClass('/projects')}`} href="#" id="projectsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Projects
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="projectsDropdown">
                                <li><Link className="dropdown-item" to="/projects">Project 1</Link></li>
                                <li><Link className="dropdown-item" to="/projects">Project 2</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${getActiveClass('/leaders')}`} to="/leaders">Leaders</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={`nav-link dropdown-toggle ${getActiveClass('/gallery')}`} href="#" id="galleryDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Gallery
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="galleryDropdown">
                                <li><Link className="dropdown-item" to="/gallery">Photo 1</Link></li>
                                <li><Link className="dropdown-item" to="/gallery">Photo 2</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${getActiveClass('/contact')}`} to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item ms-3">
                            <a className="nav-link" href={phone}>
                                <i className="bi bi-telephone"></i> 80 2666 2666
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
