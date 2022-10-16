import React from 'react';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid px-5">
        <a class="navbar-brand" href="index.html">
          Start Bootstrap
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item mx-3">
              <a class="nav-link" href="/login">
                Login
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="about.html">
                About
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="contact.html">
                Contact
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link btn btn-primary btn-sm px-2" href="/signup">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
