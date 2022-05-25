import React from "react";
import "../../Resources/Styles/Footer.css";
import { THEME } from "../../Constants/colors";

function Footer() {
  return (
    <>
      <footer
        className="site-footer"
        style={{ backgroundColor: THEME.colorWhite }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6 style={{ color: THEME.colorBlack }}>About</h6>
              <p className="text-justify" style={{ color: THEME.colorBlack }}>
                SportsLive.com,some text,some text,some text,some text,some
                text,some text,some text{" "}
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6 style={{ color: THEME.colorBlack }}>Categories</h6>
              <ul className="footer-links">
                <li>
                  <a
                    href="http://scanfcode.com/category/c-language/"
                    style={{ color: THEME.colorBlack }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="http://scanfcode.com/category/front-end-development/"
                    style={{ color: THEME.colorBlack }}
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="http://scanfcode.com/category/back-end-development/"
                    style={{ color: THEME.colorBlack }}
                  >
                    Cricket
                  </a>
                </li>
                <li>
                  <a
                    href="http://scanfcode.com/category/java-programming-language/"
                    style={{ color: THEME.colorBlack }}
                  >
                    Football
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6 style={{ color: THEME.colorBlack }}>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a
                    href="http://scanfcode.com/about/"
                    style={{ color: THEME.colorBlack }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="http://scanfcode.com/contact/"
                    style={{ color: THEME.colorBlack }}
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="http://scanfcode.com/contribute-at-scanfcode/"
                    style={{ color: THEME.colorBlack }}
                  >
                    Contribute
                  </a>
                </li>
                <li>
                  <a
                    href="http://scanfcode.com/privacy-policy/"
                    style={{ color: THEME.colorBlack }}
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
      </footer>
    </>
  );
}

export default Footer;
