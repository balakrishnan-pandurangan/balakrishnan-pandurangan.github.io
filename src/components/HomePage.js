import React, { Component } from 'react'
import './HomePage.css'
import '../assets/css/bootstrap.css'
import '../assets/css/maicons.css'
import '../assets/css/themify-icons.css'
import '../assets/css/topbar.virtual.css'
import '../assets/css/virtual.css'
import {
    faLinkedin,
    faTwitter,
    faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import '../assets/css/minibar.virtual.css'

export class HomePage extends Component {

    render() {
        return (
            <div>
                <div class="vg-page page-home" id="home">

                    <div class="navbar navbar-expand-lg navbar-dark sticky" data-offset="500">
                        <div class="container">                           
                            <div >
                                <ul >
                                    <div class="socialnetwork">
                                        <a class="navbar-brand" href="https://github.com/balakrishnan-pandurangan"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="github social">
                                            <FontAwesomeIcon icon={faGithub} size="2x" />
                                        </a>
                                    </div>
                                    <div class="socialnetwork">
                                        <a class="navbar-brand" href="https://www.linkedin.com/in/balakrishnan-pandurangan/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="linkedin social">
                                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                        </a>
                                    </div>
                                    <div class="socialnetwork">
                                        <a class="navbar-brand" href="https://twitter.com/krishbalapandu"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="twitter social">
                                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                                        </a>
                                    </div>
                                </ul>
                            </div>
                            <button class="navbar-toggler" data-toggle="collapse" data-target="#main-navbar" aria-expanded="true">
                                <span class="ti-menu"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="main-navbar">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active">
                                        <a href="#home" class="nav-link" data-animate="scrolling">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#about" class="nav-link" data-animate="scrolling">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#interests" class="nav-link" data-animate="scrolling">Interests</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#projects" class="nav-link" data-animate="scrolling">Projects</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#contact" class="nav-link" data-animate="scrolling">Contact</a>
                                    </li>
                                </ul>
                                <ul class="nav ml-auto">
                                    <li class="nav-item">
                                        <button class="btn btn-fab btn-theme no-shadow">En</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="1200" class="caption-header text-center wow zoomInDown">
                        <h5 class="fw-normal">Welcome</h5>
                        <h1 class="fw-light mb-4">I'm <b class="fg-theme">Balakrishnan</b> Pandurangan</h1>
                        <div class="badge">FULLSTACK & GO Expert</div>
                    </div>
                    <div class="floating-button"><span class="ti-mouse"></span></div>
                </div>
            </div>
        )
    }
}

export default HomePage
