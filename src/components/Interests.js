import React, { Component } from 'react'
import {   
    faAws
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faPalette, faToolbox } from '@fortawesome/fontawesome-free-solid';

export class Interests extends Component {
    render() {
        return (
            <div class="vg-page page-service" id="interests">
                <div class="container">
                    <div data-aos="fade-up" data-aos-duration="1200" class="text-center wow fadeInUp">
                        <div class="badge badge-subhead">Interests</div>
                    </div>
                    <h1 data-aos="fade-up" data-aos-duration="1200" class="fw-light text-center wow fadeInUp">What can i do?</h1>
                    <div class="row mt-5">
                        <div class="col-md-6 col-lg-4 col-xl-3">
                            <div data-aos="fade-up" data-aos-duration="1200" class="card card-service wow fadeInUp">
                                <div class="icon">
                                    <FontAwesomeIcon icon={faLaptop} size="2x" />
                                </div>
                                <div class="caption">
                                    <h4 class="fg-theme">API Development</h4>
                                    <p>REST API, RPC , GraphQL backend development using Go ,C# and Node JS</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                            <div data-aos="fade-up" data-aos-duration="1200" class="card card-service wow fadeInUp">
                                <div class="icon">
                                    <FontAwesomeIcon icon={faPalette} size="2x" />
                                </div>
                                <div class="caption">
                                    <h4 class="fg-theme">UI Development</h4>
                                    <p>SPA , Multipage applications development usign react framework</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                            <div data-aos="fade-up" data-aos-duration="1200" class="card card-service wow fadeInUp">
                            <div class="icon">
                                    <FontAwesomeIcon icon={faToolbox} size="2x" />
                                </div>
                                <div class="caption">
                                    <h4 class="fg-theme">CI/CD</h4>
                                    <p>Cloudformation,Docker,Jenkins,CDK script development for ci/cd operations</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                            <div data-aos="fade-up" data-aos-duration="1200" class="card card-service wow fadeInUp">
                                <div class="icon">
                                    <FontAwesomeIcon icon={faAws} size="2x" />
                                </div>
                                <div class="caption">
                                    <h4 class="fg-theme">Cloud Integration</h4>
                                    <p>Compute, Storage, Build, Deploy, Monitoring with AWS Services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Interests
