import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import Logo from './with-all-w2s.png';

const Nav = (props) => (
  <div className="nav">
    <img alt='what to say logo' src={Logo} className="logo"/>
    <div className="nav-right">
      <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'User Profile' : 'Login / Register'}
      </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}

      {props.user.id && (
        <>
          <LogOutButton className="nav-link" />
        </>
      )}
      {/* Always show this link since the about page is not protected */}
      <a className="nav-link" href="https://withall.org/">
        About WithAll
          </a>
      {/* Always show this link since the about page is not protected */}
      <a id="donate" href="https://withall.org/donate/">
        Donate
      </a>
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
