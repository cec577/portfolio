/*
 * Npm import
 */
import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
/*
 * Local import
 */
import './Header.css';

const Header = () => (

      <div className="bb">
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <a href="#home" className="navbar-brand" >Home</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a href ="#propos" className="nav-link" >À propos <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a href="#competence" className="nav-link">Compétences  </a>
            </li>
            <li className="nav-item active">
              <a href="#exp" className="nav-link ">Expériences </a>
            </li>
            <li className="nav-item active">
              <a href="#dip" className="nav-link ">Diplômes</a>
            </li>
            <li className="nav-item active">
              <a href="#contact" className="nav-link " >Contact</a>
            </li>
          </ul>
        </div>

      </nav>

</div>
    );


export default Header;
