import { faCopyright, faHouseUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"

import "./footer.css"

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="footer">
      <div className="fLists">
        <button className="fButton" onClick={() => handleClick('/help')}>
          <ul className="fList">
            <li className="fListItem">Help</li>
          </ul>
        </button>
        <button className="fButton" onClick={() => handleClick('/about')}>
          <ul className="fList">
            <li className="fListItem">About</li>
          </ul>
        </button>
        <button className="fButton" onClick={() => handleClick('/contact')}>
          <ul className="fList">
            <li className="fListItem">ContactUs</li>
          </ul>
        </button>
       
      </div>
      <div className="fText">
        <button className="fButton" onClick={() => handleClick('/')}>
      
        </button> 
        <span className="sp123">
          © Copyright 2023.
          All Rights Reserved.SmartBooking
        </span>
        <br />
      </div>
      <br />
      <br />
    </div>
  )
}

export default Footer;
