import React, { useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const [category, setCategory] = useState("Select");

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            onClick={() => setCategory("general")}
          >
            NewsNest
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={() => setCategory("general")}
                >
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {category}
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/business"
                      onClick={() => setCategory("business")}
                    >
                      business
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/entertainment"
                      onClick={() => setCategory("entertainment")}
                    >
                      entertainment
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/sports"
                      onClick={() => setCategory("sports")}
                    >
                      sports
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/health"
                      onClick={() => setCategory("health")}
                    >
                      health
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="dropdown-item"
                      to="/science"
                      onClick={() => setCategory("science")}
                    >
                      science
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="dropdown-item"
                      to="/sports"
                      onClick={() => setCategory("sports")}
                    >
                      sports
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="dropdown-item"
                      to="/technology"
                      onClick={() => setCategory("technology")}
                    >
                      technology
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
