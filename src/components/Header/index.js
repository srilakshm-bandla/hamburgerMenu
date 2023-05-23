// Write your code here
import {Link, withRouter} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'

import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'

import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'
import Popup from 'reactjs-popup'

const Header = () => (
  <div className="menu-container">
    <div className="nav-content">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>

      <Popup
        modal
        trigger={
          <button type="button" data-testid="hamburgerIconButton">
            <GiHamburgerMenu size={30} background-color="transparent" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              data-testid="closeButton"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose size={30} />
            </button>
            <ul className="links-list-container">
              <li className="link-list-item">
                <Link to="/">
                  <AiFillHome size={36} />
                  <p className="link-home">Home</p>
                </Link>
              </li>
              <li className="link-list-item">
                <Link to="/about">
                  <BsInfoCircleFill size={36} />
                  <p className="link-home">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)
export default withRouter(Header)
