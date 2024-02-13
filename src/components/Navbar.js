import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    useEffect(() => {
        document.body.addEventListener('click', handleBodyClick);
        return () => {
            document.body.removeEventListener('click', handleBodyClick);
        };
    }, []);

    function handleBodyClick(event) {
        const navbarToggle = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (!navbarToggle.contains(event.target) && !navbarCollapse.contains(event.target) && navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    }
    return (
        // <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} fixed-top  `}>
        //     <div className="container-fluid">
        //         <Link className="navbar-brand" to="/">WellText</Link>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <a className="nav-link active" aria-current="page" href="#">Home</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">About</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Contact Us</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Blog</a>
        //                 </li>
        //             </ul>
        //             <form className="d-flex" role="search">
        //                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        //                 <button className="btn btn-outline-success" type="submit">Search</button>
        //             </form>
        //             <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark' : 'light'} `}>
        //                 <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault" />
        //                 <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        //             </div>

        //         </div>
        //     </div>
        // </nav >
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} fixed-top`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">WellText</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    )
}
