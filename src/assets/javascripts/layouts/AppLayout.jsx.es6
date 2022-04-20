import React, {useState, useMemo} from "react";
import { Outlet, Link, NavLink, useLocation } from "react-router-dom";


function AppLayout(props) {
    const location = useLocation();
    
    return (<div className="App">
        <nav className="navbar">
            <div className="app-content">
                <Link to="/" className="navbar-brand">
                  <img src="/planet-express.svg" className='logo' alt='SPA DEMO' />
                </Link>
                <div className="search">
                    <input type="search" placeholder="Search" value={props.search} onChange={(e) => {props.setSearch(e.target.value)}}/>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul>
                        <li>
                            <a href="https://github.com/" target="_blank">Github</a>
                        </li>
                        <li>
                            <NavLink to="/manage" className="nav-link"><img src="/fry.png" className="user-image"/></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet context={[]}/>
        <footer>
            <div className="app-content">
                <img src="/planet-express.svg" className='logo' alt='SPA DEMO' />
                <div className="right-side">
                    <span className="copyright">© 2999 Planet Express, LLC. ALL RIGHTS RESERVED</span>
                    <div className="footer-links">
                        <a href="#">Terms & Conditions</a> | 
                        {" "}
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>);
}

export default AppLayout;