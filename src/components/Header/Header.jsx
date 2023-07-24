import React, { useContext, useRef, useState } from 'react';
import avatar from '../../assets/avatar.svg';
import dots from '../../assets/3dot.svg';
import './header.css';
import { ConnectionContext } from '../../hooks/useConnection';
import Button from '../Button/Button';
import useClickOutside from '../../hooks/useClickOutside';
import { Link } from 'react-router-dom';

export default function Header({ noAvatar }) {
  const { logout } = useContext(ConnectionContext);
  const [menuDisplay, setMenuDisplay] = useState(false);

  function handleClose() {
    setMenuDisplay(false);
  }

  function handleToggleMenu() {
    setMenuDisplay(!menuDisplay);
  }

  const menuRef = useRef();
  useClickOutside(menuRef, handleClose);

  return (
    <div className="header">
      <div className="menu" ref={menuRef}>
        <button
          className={`container ${menuDisplay ? 'isCross' : ''}`}
          onClick={handleToggleMenu}
        >
          <img src={dots} className="dots" />
          <div className="bar1" />
          <div className="bar2" />
        </button>
        {menuDisplay ? (
          <div className="dropDown">
            <Button onClick={logout} style="dropDown">
              Déconnexion
            </Button>
          </div>
        ) : (
          <></>
        )}
      </div>
      {noAvatar == undefined && (
        <Link to="/">
          <img src={avatar} className="avatar" />
        </Link>
      )}
    </div>
  );
}
