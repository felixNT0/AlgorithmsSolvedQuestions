import React from "react";
import Link from "../CustomLink";

function Navbar() {
  return (
    <div style={{ boxShadow: "5px 5px 15px grey" }}>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link href="/">
            <a
              style={{ fontSize: "30px", color: "white" }}
              className="navbar-brand"
              href="#"
            >
              <img
                src="/ffdmlog.jpg"
                alt=""
                width="33"
                height="33"
                className="d-inline-block align-text-top"
              />
              FFDM
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/testimonies">
                  <a
                    style={{ fontSize: "15px", color: "white" }}
                    className="nav-link"
                  >
                    Testimonies
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/programmes">
                  <a
                    style={{ fontSize: "15px", color: "white" }}
                    className="nav-link"
                  >
                    Programmes
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
