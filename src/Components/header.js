import React, {Component} from 'react';
import './header.scss';


const Header = ()  => {
  return (
    
     <header className="header" >
        		<nav>
			<a href="" class="logo"><img src="img/logo.png" alt=""/>Daisy</a>
			<menu>
				<li><a href="">About</a></li>
				<li><a href="">Portfolio</a></li>
				<li><a href="">Services</a></li>
				<li><a href="">Contact</a></li>
			</menu>
		</nav>
		<div class="mainText">
			<h2><span>Clients</span> in your business</h2>
			<p>Your clients on the internet. Learn how to receive them.</p>
			<a href="" class="Iwant">I want clients</a>
		</div>
		<div class="botHeader">
			<a href="#receive">&darr;</a>
		</div>
	</header> 
    
  );
}

export default Header;
