import React from 'react';
import './styles.css';

const NavBar = (props) => {
  console.log(props)
  return (
    <div>
        <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
<div>hola</div>
    </div>
  )
}

export default NavBar;