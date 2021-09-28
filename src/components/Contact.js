import React, { Component } from 'react'
import { faEnvelope } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { send, init } from 'emailjs-com';

export class Contact extends Component {

    constructor(props) {
        super(props);
        init('user_PGMIvSHso1DIlEPBpp068');
        this.state = {
            name: '',
            mail: '',
            subject: '',
            message: '',
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) { this.setState({ name: event.target.value }); }
    handleMailChange(event) { this.setState({ mail: event.target.value }) }
    handleSubjectChange(event) { this.setState({ subject: event.target.value }) }
    handleMessageChange(event) { this.setState({ message: event.target.value }) }

    handleSubmit(event) {
        event.preventDefault();
        const templateId = 'template_0nad8bg';
        const userId = 'user_PGMIvSHso1DIlEPBpp068';

        this.sendFeedback(templateId, {
            subject: this.state.subject,
            message: this.state.message,
            from_name: this.state.name,
            reply_to: this.state.mail
        }, userId)
    }

    clearContactForm() {
        this.setState({ name: "" })
        this.setState({ mail: "" })
        this.setState({ subject: "" })
        this.setState({ message: "" })
    }

    sendFeedback(templateId, variables, userId) {
        send(
            'service_u1rht71', templateId, variables, userId
        ).then(res => {
            alert('Email successfully sent!', res)
            this.clearContactForm();
        })
            .catch(err => console.log('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    render() {

        return (
            <div class="vg-page fw-light page-contact" id="contact">
                <div class="container-fluid">
                    <div data-aos="fade-up" data-aos-duration="1200" class="text-center wow fadeInUp">
                        <div class="badge badge-subhead">Contact</div>
                    </div>
                    <h2 data-aos="fade-up" data-aos-duration="1200" class="text-center fw-normal wow fadeInUp">Get in touch</h2>
                    <div class="row py-4 ml-5">
                        <div class="row py-4 mx-5 wow zoomIn">
                            <a class="navbar-brand" href="https://github.com/balakrishnan-pandurangan"
                                target="_blank"
                                rel="noreferrer"
                                className="github social">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                            </a>
                            <span class="col-lg-6 pt-1">ITBALA27@GMAIL.COM</span>
                        </div>
                        <div class="col-xl-6 ml-5">
                            <form class="vg-contact-form">
                                <div class="form-row">
                                    <div class="col-12 wow fadeInUp">
                                        <input class="form-control" value={this.state.name} onChange={this.handleNameChange} type="text" name="Name" placeholder="Your Name..." />
                                    </div>
                                    <div class="col-6 mt-3 wow fadeInUp">
                                        <input class="form-control" value={this.state.mail} onChange={this.handleMailChange} type="text" name="Email" placeholder="Email Address..." />
                                    </div>
                                    <div class="col-6 mt-3 wow fadeInUp">
                                        <input class="form-control" value={this.state.subject} onChange={this.handleSubjectChange} type="text" name="Subject" placeholder="Subject..." />
                                    </div>
                                    <div class="col-12 mt-3 wow fadeInUp">
                                        <textarea class="form-control" value={this.state.message} onChange={this.handleMessageChange} name="Message" rows="6" placeholder="Enter message here.."></textarea>
                                    </div>
                                    <button type="submit" onClick={this.handleSubmit} class="btn btn-theme mt-3 wow fadeInUp ml-1">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
