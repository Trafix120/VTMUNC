import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light box-shadow mb-3">
                <div class="container-fluid">
                    <img src="/Images/Logo.png" class="navbar-logo" />
                    <a class="navbar-brand customFont" asp-area="" asp-controller="Home" asp-action="Index">VTMUNC</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse d-sm-inline-flex justify-content-end">
                        <NavLink class="nav-link customFont" to="/">Home</NavLink>
                        <NavLink class="nav-link customFont"to="/about"> About Us</NavLink>
                        <NavLink class="nav-link customFont" to="/committees">Committees</NavLink>
                        <NavLink class="nav-link customFont" to="/resources">Resources</NavLink>
                        <NavLink class="nav-link customFont" to="/sponsors"> Sponsors</NavLink>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;