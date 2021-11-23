import Image from 'next/image';
import FooterLogo from '../images/footer-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter ,faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
      <div className=''>
        <div>
        <footer>
            <div class="footer-wrap">
                <div class="footer-content">
                    <div class="row">
                        <div class="col-md-4 col-lg-4 col-xl-4 col-12">
                            <div class="footer-left-inner">
                                <div class="footer-logo">
                                    <a href="index.php">
                                        <Image src={FooterLogo} alt="" />
                                    </a>
                                </div>
                                <div class="copywrites">
                                    <p>Copyright 2020. All right reserved</p>
                                    <p><a href="terms-conditions">Terms and Condition</a></p>
                                    <p><a href="privacy-policy">Privacy Policy</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 col-lg-8 col-xl-8 col-12">
                            <div class="footer-links-wrap">
                                <div class="row">
                                    <div class="col-md-4 col-lg-4 col-xl-4 col-6 no-p">
                                        <div class="footer-links-box">
                                            <div class="link-title">
                                                <h4>SERVICES</h4>
                                            </div>
                                            <div class="links">
                                                <div class="links-inner">
                                                    <p> <a href="">Photography</a> </p>
                                                    <p><a href="">Videography</a></p>
                                                    <p><a href="">Virtual 3D tours</a></p>
                                                    <p><a href="">Virtual staging</a></p>
                                                    <p><a href="">Property sites</a></p>
                                                    <p><a href="">Brochures</a></p>
                                                    <p><a href="">Floor plans</a></p>
                                                    <p><a href="">Agent marketing</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 col-xl-4 col-6 no-p">
                                        <div class="footer-links-box">
                                            <div class="link-title">
                                                <h4>Pages</h4>
                                                <div class="links">
                                                    <div class="links-inner">
                                                        <p> <a href="" data-bs-toggle="modal" data-bs-target="#pricingModal">Pricing</a> </p>
                                                        <p> <a href="portfolio">Portfolio</a></p>
                                                        <p> <a href="blog-listing">Blog</a></p>
                                                        <p> <a href="help-center">Help Center</a></p>
                                                        <p> <a href="contact-us">Contact Us</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 col-xl-4 col-12 no-p">
                                        <div class="footer-links-box">
                                            <div class="link-title">
                                                <h4>Social</h4>
                                            </div>
                                            <div class="links">
                                                <div class="links-inner social-links">
                                                    <p>
                                                        <a href="">
                                                            <FontAwesomeIcon className="icon" icon={faFacebookF}></FontAwesomeIcon>
                                                        </a>
                                                    </p>
                                                    <p>
                                                        <a href="">
                                                            <FontAwesomeIcon className="icon" icon={faInstagram}></FontAwesomeIcon>
                                                        </a>
                                                    </p>
                                                    <p>
                                                        <a href="">
                                                            <FontAwesomeIcon className="icon" icon={faLinkedinIn}></FontAwesomeIcon>
                                                        </a>
                                                    </p>
                                                    <p>
                                                        <a href="">
                                                            <FontAwesomeIcon className="icon" icon={faTwitter}></FontAwesomeIcon>
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </div>
      </div>
    )
  }
  