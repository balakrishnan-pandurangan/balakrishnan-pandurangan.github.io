import React, { Component } from 'react'
import './PageAbout.css'
import profileimage from '../assets/img/bala.JPG'
import resume from '../assets/img/profile.pdf'
import {getAge,getExperience} from '../utilities/calculator.js'

export class PageAbout extends Component {

    render() {
        return (
            <div class="vg-page page-about" id="about">
                <div class="container py-5">
                    <div class="row">
                        <div data-aos="flip-up" data-aos-duration="1200" class="col-lg-4 py-3">
                            <div class="img-place wow fadeInUp">
                                <img src={profileimage} alt="" />
                            </div>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1200" class="col-lg-6 offset-lg-1 wow fadeInRight">
                            <h1 class="fw-light">Balakrishnan Pandurangan</h1>
                            <h5 class="fg-theme mb-3">GO & Full Stack Developer</h5>
                            <p className="fw-light">Professional with {getExperience()} years of industry experience in Software design and development. Experienced in Agile delivery streams along with
                                all the SDLC process.</p>
                            <p className="fw-light">Implement the services based on micro services architecture.</p>
                            <p className="fw-light">Deploy and manage our application in AWS Cloud services.</p>
                            <ul class="theme-list">
                                <li className="fw-light"><b>From:</b> Tindivanam, Tamilnadu</li>
                                <li className="fw-light"><b>Lives In:</b> Chennai, Tamilnadu</li>
                                <li className="fw-light"><b>Age:</b> {getAge()}</li>
                                <li className="fw-light"><b>Gender:</b> Male</li>
                            </ul>
                            <a href={resume} download>
                                <button class="btn btn-theme-outline">Download CV</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="container py-5">
                    <h1  data-aos="fade-in" data-aos-duration="1200" class="text-center fw-light wow fadeIn">My Skills</h1>
                    <div class="row py-3">
                        <div class="col-md-6">
                            <div class="px-lg-3">
                                <h4 data-aos="fade-up" data-aos-duration="1200" class="wow fw-light fadeInUp">Coding skills</h4>
                                <div data-aos="fade-up" data-aos-duration="1200" class="progress-wrapper wow fadeInUp">
                                    <span class="caption fw-light">JavaScript</span>
                                    <div class="progress">
                                        <div class="progress-bar" id="pb-js" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">86%</div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="1200" class="progress-wrapper fw-light wow fadeInUp">
                                    <span class="caption">C#</span>
                                    <div class="progress">
                                        <div class="progress-bar" id="pb-csharp" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">80%</div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="1200" class="progress-wrapper fw-light wow fadeInUp">
                                    <span class="caption">Golang</span>
                                    <div class="progress">
                                        <div class="progress-bar" id="pb-go" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">100%</div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="1200" class="progress-wrapper fw-light wow fadeInUp">
                                    <span class="caption">Typescript</span>
                                    <div class="progress">
                                        <div class="progress-bar" id="pb-ts" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">90%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="px-lg-3">
                                <h4 class="wow fw-light fadeInUp">Cloud & Database Skills</h4>
                                <div data-aos="fade-up" data-aos-duration="1200" class="progress-wrapper wow fw-light fadeInUp">
                                    <span class="caption">MS SQL Server</span>
                                    <div class="progress">
                                        <div class="progress-bar" id="pb-sql" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">92%</div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="1200" class="progress-wrapper fw-light wow fadeInUp">
                                    <span class="caption">Postgres</span>
                                    <div class="progress">
                                        <div class="progress-bar" id="pb-postgres" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">99%</div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="1200" class="progress-wrapper fw-light wow fadeInUp">
                                    <span class="caption">Dynamo DB</span>
                                    <div class="progress">
                                        <div class="progress-bar" id="pb-dynamo" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">79%</div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="1200" class="progress-wrapper fw-light wow fadeInUp">
                                    <span class="caption">AWS</span>
                                    <div class="progress">
                                        <div class="progress-bar" id="pb-aws" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">79%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container pt-5">
                    <div class="row">
                        <div data-aos="fade-right" data-aos-duration="1200" class="col-md-6 wow fadeInRight">
                            <h2 class="fw-light">Education</h2>
                            <ul class="timeline mt-4 pr-md-5">
                                <li>
                                    <div class="title">2013</div>
                                    <div class="details">
                                        <h5>B.Tech(IT) & Anna university</h5>
                                        <small class="fg-theme">7.9 CGPA(79%)</small>
                                        <p>sri sairam engineering college,chennai,tamilnadu</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="title">2010</div>
                                    <div class="details">
                                        <h5>Diploma(IT) & DOTE</h5>
                                        <small class="fg-theme">93.7 %</small>
                                        <p>swamy abedhanandha polytechnic college,thellar,tamilnadu</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="title">2007</div>
                                    <div class="details">
                                        <h5>SSLC</h5>
                                        <small class="fg-theme">87%</small>
                                        <p>government high school,ongur,tindivanam,tamilnadu</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1200" class="col-md-6 wow fadeInRight" data-wow-delay="200ms">
                            <h2 class="fw-light">Experience</h2>
                            <ul class="timeline mt-4 pr-md-5">
                                <li>
                                    <div class="title">2021-Jul-12 to Current</div>
                                    <div class="details">
                                        <h5>McAfee Software India Pvt Ltd</h5>
                                        <small class="fg-theme">Sr Software Development Engineer</small>
                                        <p>Consumer products-Go,Node JS,AWS</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="title">2021-Apr-1 to 2021-Jul-09</div>
                                    <div class="details">
                                        <h5>Wipro software</h5>
                                        <small class="fg-theme">Associate consultant</small>
                                        <p>HP Sales page microservice-Go,gRPC,ProtoBuffer,Postgres,AWS</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="title">2018-Jan-15 to 2021-Mar-31</div>
                                    <div class="details">
                                        <h5>EMIS Health India Pvt Ltd</h5>
                                        <small class="fg-theme">Senior Associate</small>
                                        <p>EMIS-X Subject Communications</p>
                                        <p>EMIS-X Event Engine</p>
                                        <p>EMSI-X Config Service</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="title">2016-Oct-03 to 2018-Jan-12</div>
                                    <div class="details">
                                        <h5>HCL Technologies</h5>
                                        <small class="fg-theme">Member Technical Staff</small>
                                        <p>PrecisionCal – Windows Application - C#,XAML and SQLite</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="title">2014-Feb-17 to 2016-Sep-30</div>
                                    <div class="details">
                                        <h5>Syncfusion Software Pvt Ltd</h5>
                                        <small class="fg-theme">Software Engineer Level2</small>
                                        <p>Spreadsheet – Windows custom control - C#, XAML</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageAbout
