import Link from "next/link"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light 
                bg-dark bg-opacity-75 fixed-top text-light">
                <div className="container">
                    <Link className="navbar-brand 
                        text-light font-bold" href="/">
                        GFG Blogs
                    </Link>
                    <button className="navbar-toggler"
                        type="button" 
                        data-toggle="collapse"
                        data-target="#navbarNav" 
                        aria-controls="navbarNav"
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" navbar-collapse" 
                         id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link href="/"
                                    className="nav-item nav-link 
                                               text-light">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="Bloglist/Createblog"
                                    className="nav-item nav-link 
                                               text-light">
                                    Create new Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};