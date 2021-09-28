// import logo from './logo.svg';
// import './App.css';

import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as KlinkIcon} from './icons/klink.svg'
import smeargle from './smeargle.PNG'

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div>
      <Navbar>
        <NavItem icon={<KlinkIcon />} >
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
      <body>
        <Title></Title>
        <Smeargle></Smeargle>
      </body>
    </div>
  );
}

function Title(){
  return(
    <div>
      <h1 className="enter">Woo</h1>
      <h2 className="enter-2">Commissions</h2>
    </div>
  );
}

function Smeargle(){
  return(
      <img className="smeargle" src={smeargle}/>
  );
}

function DropdownMenu(){
  
  const [activeMenu, setActiveMenu] = useState('main');


  function DropdownItem(props){
    return(
      <a href="#" className="menu-item">
        {/* <span className="icon-button">{props.leftIcon}</span> */}
        {props.children}
        {/* <span className="icon-right">{props.rightIcon}</span> */}
      </a>
    );
  }

  return(
    <div className="dropdown">
      <DropdownItem>Commissions</DropdownItem>
      <DropdownItem>Gallery</DropdownItem>
      <DropdownItem>Contact</DropdownItem>
    </div>
  );
}


function Navbar(props){
  return(
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props){

  const [open, setOpen] = useState(false);

  return(
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

export default App;
