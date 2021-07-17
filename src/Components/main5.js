import React, { Component } from 'react';
import ReactMixitup from 'react-mixitup';

import './main5.scss';


const Main5 = () => {
  return (

    <div className="ourTeam" id="ourTeam">

      <h2>Our<span>team</span></h2>
<div className="wrap">
      <div className="marketing">
        <img src="img/marketing.png" alt=""/>
        <h4><span>Tomothy</span> Bowman</h4>
        <p>Marketing</p>

        <a href="#">
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
          </span>
          </a>

          <a href="#">
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fab fa-facebook fa-stack-1x fa-inverse"></i>
          </span>
          </a>

          <a href="#">
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fab fa-vk fa-stack-1x fa-inverse"></i>
          </span>
          </a>
        
      </div>

      <div className="ceo">
      <img src="img/ceo.png" alt=""/>
        <h4><span>Steve</span> Iracy</h4>
        <p>CEO</p>

        <a href="#">
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>

          </span>
          </a>
<a href="#">
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fab fa-facebook fa-stack-1x fa-inverse"></i>
          </span>
          </a>
          <a href="#">
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fab fa-vk fa-stack-1x fa-inverse"></i>
          </span>
        </a>
      </div>

      <div className="clients">
      <img src="img/clients.png" alt=""/>
        <h3><span>Hellen</span> Johns</h3>
        <p>Clients</p>

        <a href="#">
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>

          </span>
          </a>
          <a href="#">
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fab fa-facebook fa-stack-1x fa-inverse"></i>
          </span>
          </a>
          <a href="#">
          <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fab fa-vk fa-stack-1x fa-inverse"></i>
          </span>
        </a>
      </div>


    </div>
    </div>

  )

}

export default Main5;
