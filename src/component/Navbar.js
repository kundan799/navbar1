import { getByTitle } from '@testing-library/react'
import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">{props.about}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.find}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.learn}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.heir}</a>
          </li>
          
         </ul>
        <form className="d-flex" role="search">
        <a className="nav-link sign" href="/">{props.sign}</a>
         
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}
 Navbar.propTypes ={title:PropTypes.string.isRequired,
   about: PropTypes.string.isRequired,  
 }
//  Navbar.defaultprops={
//    title:"set as  default",
//    about:" about text here",


//  };
 Navbar.defaultProps = {
  
  title:"set as  default",
   about:" about text here",
};
