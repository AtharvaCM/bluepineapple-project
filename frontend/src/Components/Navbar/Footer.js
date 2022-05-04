import React from 'react'
import '../../Resources/Styles/Footer.css'

function Footer() {
    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">SportsLive.com,some text,some text,some text,some text,some text,some text,some text </p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="http://scanfcode.com/category/c-language/">Home</a></li>
                                <li><a href="http://scanfcode.com/category/front-end-development/">News</a></li>
                                <li><a href="http://scanfcode.com/category/back-end-development/">Cricket</a></li>
                                <li><a href="http://scanfcode.com/category/java-programming-language/">Football</a></li>
                                
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="http://scanfcode.com/about/">About Us</a></li>
                                <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                                <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                               
                            </ul>
                        </div>
                    </div>
                    <hr/>
                </div>
            </footer>
        </>
    )
}

export default Footer