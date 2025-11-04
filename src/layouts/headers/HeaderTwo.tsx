"use client";
import Link from "../../components/Link";
import Navmenu from "./Navmenu";
import UseSticky from "../../hooks/UseSticky";
import MobileMenu from "./MobileMenu";
import { useState } from "react";


export default function HeaderTwo() {
  const { hidden, sticky } = UseSticky();
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <header className={`site-header azzle-header-section section2 ${sticky ? "sticky-menu" : ""} ${hidden ? "hide-header" : ""}`} id="sticky-menu">
        <div className="container">
          <div className="row gx-3 align-items-center justify-content-between">
            <div className="col-8 col-sm-auto ">
              <div className="header-logo">
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#fff' }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="28" fontWeight="bold" fill="currentColor">*</text>
                  </svg>
                  <span style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '-0.5px' }}>Apex</span>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="azzle-main-menu-item">
                <nav className="main-menu menu-style1 d-none d-lg-block menu-left text-align-left">
                  <Navmenu menu_style={true} />
                </nav>
              </div>
            </div>
            <div className="col-auto d-flex align-items-center">
              <div className="azzle-header-button-wraper">
                <div className="azzle-header-login-button button3">
                  <ul>
                    <li>
                      <Link href="/sign-in">Login</Link>
                    </li>
                  </ul>
                </div>
                <Link className="azzle-default-btn azzle-header-btn btn2" href="/sign-up" data-text="Sign up free">
                  <span className="button-wraper">Sign up free</span>
                </Link>
              </div>
              <div className="azzle-header-menu">
                <nav className="navbar site-navbar justify-content-between">
                  {/* <!-- Brand Logo--> */}
                  {/* <!-- mobile menu trigger --> */}
                  <button onClick={() => setIsOpen(!isOpen)} className="azzle-menu-toggle toggle2 d-inline-block d-lg-none ">
                    <span></span>
                  </button>
                  {/* <!--/.Mobile Menu Hamburger Ends--> */}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} />

    </>
  )
}
