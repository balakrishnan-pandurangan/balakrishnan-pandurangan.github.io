import React, { Component } from 'react'
// import projectimage from '../assets/img/projectimage.jpg'

export class Projects extends Component {
    render() {
        return (
            <div class="vg-page page-service" id="projects">
                <div class="container">
                    <div data-aos="fade-up" data-aos-duration="1200" class="text-center wow fadeInUp">
                        <div class="badge badge-subhead">Projects</div>
                    </div>
                    <h1 data-aos="fade-up" data-aos-duration="1200" class="fw-light text-center wow fadeInUp">What i am done?</h1>
                    <div class="row">
                        <div data-aos="flip-up" data-aos-duration="1200" class="col-lg-4 py-3">
                            {/* <div class="img-place wow fadeInUp">
                                <img src={projectimage} alt="" />
                            </div> */}
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1200" class="col-lg-6 offset-lg-1 py-3 wow fadeInRight">
                            <ul class="theme-list fw-light">
                                <li>Implement the services based on micro services architecture.</li>
                                <li>Deploy and manage our application in AWS Cloud services.</li>
                                <li>Cloudwatch used for application logging and monitoring</li>
                                <li>Static code analysis, violations using go sec, go lint packages</li>
                                <li>Involved in core modules design and implementation</li>                                
                                <li>Implement the unit test cases in go using build in testing package</li>
                                <li>Experience in module enhancement for Winforms application in C#</li>
                                <li>Test coverage and execution using sonar cloud</li>                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
