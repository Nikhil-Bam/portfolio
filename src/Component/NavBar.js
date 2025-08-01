import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../assets/logos.png'; 
 import underline from '../assets/nav_underline.svg'; 
import './navbar.css';
export default function NavBar() {
  const [menu,setMenu] = useState("home");
  return (
    <div  className='navbar'>
      <img src={logo} alt="Logo" style={{ height: '80px',width:'100px',background:'white',borderRadius:'30px' }} />
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' offset={50}href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink> {menu==="home"?<img src={underline} alt=''/>:<></>} </li>
        <li><AnchorLink className='anchor-link' offset={50}href='#about'><p onClick={()=>setMenu("about")} >About me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>} </li>
        <li><AnchorLink className='anchor-link' offset={50}href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt=''/>:<></>} </li>
        <li><AnchorLink className='anchor-link' offset={50}href='#mywork'><p onClick={()=>setMenu("mywork")}>Portfolio</p></AnchorLink>{menu==="portfolio"?<img src={underline} alt=''/>:<></>} </li>
        <li><AnchorLink className='anchor-link' offset={50}href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>} </li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50}href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  );
}
