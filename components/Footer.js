import React from "react";
import footerBg from "../assets/img/footer-bg.png";
import footerLogo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerbg">
        <img src={footerBg} className="svg" alt="" />
      </div>
      <div className="footer-top pt-120 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src={footerLogo} alt="" />
                  </a>
                </div>
                <p>
                  Neobin is a climate tech startup bringing blockchain technology for waste management in smart city.
                </p>

                <div className="footer-social-area">
                  <ul className="social-icons social-icons-light nav">
                    <li>
                      <a href="#" target="_blank">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <div className="widget-header">
                  <h5>Headquarter</h5>
                </div>

                <div className="widget-body">
                  <ul className="address-list">
                    <li>
                      <span>
                        <i className="fa  fa-phone-square"></i>
                      </span>
                      Neobin
                    </li>
                    <li>
                      <span>
                        <i className="fa  fa-envelope"></i>
                      </span>
                     neobin@gmail.com
                    </li>
                    <li>
                      <span>
                        <i className="fa  fa-map"></i>
                      </span>
                      949 01 Nitra, Slovakia
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <div className="widget-header">
                  <h5> Links</h5>
                </div>
              </div>

              <div className="widget-body">
                <div className="extra-link">
                  <div className="link-left">
                    <ul>
                      <li>
                        <a href="#">Company</a>
                      </li>
                      <li>
                        <a href="#">Service</a>
                      </li>
                      <li>
                        <a href="#">Testimonial</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      
                    </ul>
                  </div>
                  
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <div className="widget-body">
                  <div className="twetter-post-inner">
                    <div className="footer-post-details">
                      Rethink your smartcity management from a approach. <br />
                      <a href="">Neobin </a>
                    </div>
                    <div className="twetter-post">
                      <span>
                        <i className="fa fa-twitter"></i>
                      </span>
                     Neobin update July 24, 2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-text text-center">
          <p>  Neobin 2022-all rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
