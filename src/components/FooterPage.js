import React, { Component } from 'react'

export class FooterPage extends Component {
    render() {
        return (
            <div class="vg-footer">
                <h1 class="text-center">Virtual Folio</h1>
                <div >
                    <div class="col-4">
                        <div class="footer-info">
                            <p>Where to find me</p>
                            <hr class="divider" />
                            <p class="fg-white">No 4/10, Andal Nagar, 7th street, Porur, Chennai 600116, India</p>
                        </div>
                    </div>
                    <div class="col-12">
                        <p class="text-center mb-0 mt-4">Copyright &copy; 2021. All right reserved by @
                            <a href=" ">balakrishnan pandurangan</a></p>

                    </div>
                </div>
            </div>
        )
    }
}

export default FooterPage
