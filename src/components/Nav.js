import React, { useState } from 'react';
import '../assets/styles/components.css';
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleBg, setToggleBg] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setToggleBg(true);
    } else {
      setToggleBg(false)
    }
  };

  window.addEventListener('scroll', changeBackground);

return (
  <nav className={toggleBg ? 'navbar active' : 'navbar'} style={toggleNav ? {height: "105vh"} : {height: "160px"}}>
      <div className='nav__innerContainer'>    
          <div className='nav__left'>
              <a href='/' style={{ textDecoration: 'none', color: 'black' }}>
                <div className='nav__title'>
                    <img src={logo} alt='' />
                </div>
            </a>
          </div>
          <div className='nav__right'>
              <div className='nav__linkContainer'>
                  <div className='nav__item'>
                    <a href='/'>home</a>
                  </div>
                  <div className='nav__item'>
                    <a href='/training'>training</a>
                  </div>
                  <div className='nav__item'>
                    <a href='/phishgpt'>PhishGPT</a>
                  </div>
                  <button className='nav__btn' onClick={() => (setToggleNav(!toggleNav))}>
                      {toggleNav ? <> &#10005; </> : <><FontAwesomeIcon icon={faBars}/></>}
                  </button>
              </div>
          </div>
      </div>
      { toggleNav && (
          <div className='nav__extendedContainer'>
              <div className='link__extended'>
                <a href='/' className='a__nostyle' onClick={() => (setToggleNav(false))}>home</a>
              </div>
              <div className='link__extended'>
                <a href='/training' className='a__nostyle' onClick={() => (setToggleNav(false))}>training</a>
              </div>
              <div className='link__extended'>
                <a href='/phishgpt' className='a__nostyle' onClick={() => (setToggleNav(false))}>PhishGPT</a>
              </div>
          </div>
      )}
  </nav>
)}

export default Nav