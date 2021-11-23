import Image from 'next/image'
import HelpImg from '../images/hel-img.png'
import Link from 'next/dist/client/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function HelpCenter() {
  return (
    <div className="">
        <section>
            <div class="help-center-wrapper">
                <div class="help-center-inner">
                    <div class="row">
                        <div class="col-md-5 col-lg-5 col-xl-5 p-0">
                            <div class="help-center-img">
                                <Image src={HelpImg} />
                            </div>
                        </div>
                        <div class="col-md-7 col-lg-7 col-xl-7 p-0">
                            <div class="help-navigation-wrap" data-aos="fade-up" data-aos-duration="1500">
                                <div class="title">
                                    <h1>Help Center</h1>
                                </div>
                                <div class="help-navigations">
                                    <div class="navigation-item">
                                        <div class="heading">
                                            <h3>Services</h3>
                                        </div>
                                        <div class="navigation-listing">
                                            <ul>
                                                <li>
                                                    <Link href="/help-center-detail">
                                                        <a>
                                                            <p>Videography</p>
                                                            <FontAwesomeIcon class="icon" icon={faArrowRight}></FontAwesomeIcon>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/help-center-detail">
                                                        <a>
                                                            <p>Photography</p>
                                                            <FontAwesomeIcon class="icon" icon={faArrowRight}></FontAwesomeIcon>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/help-center-detail">
                                                        <a>
                                                            <p>Virtual 3D tours</p>
                                                            <FontAwesomeIcon class="icon" icon={faArrowRight}></FontAwesomeIcon>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/help-center-detail">
                                                        <a>
                                                            <p>Virtual staging</p>
                                                            <FontAwesomeIcon class="icon" icon={faArrowRight}></FontAwesomeIcon>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/help-center-detail">
                                                        <a>
                                                            <p>Property Sites</p>
                                                            <FontAwesomeIcon class="icon" icon={faArrowRight}></FontAwesomeIcon>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/help-center-detail">
                                                        <a>
                                                            <p>Brochures</p>
                                                            <FontAwesomeIcon class="icon" icon={faArrowRight}></FontAwesomeIcon>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/help-center-detail">
                                                        <a>
                                                            <p>Floor plans</p>
                                                            <FontAwesomeIcon class="icon" icon={faArrowRight}></FontAwesomeIcon>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="navigation-item">
                                        <div class="heading">
                                            <h3>POLICIES</h3>
                                        </div>
                                        <div class="navigation-listing">
                                            <ul>
                                                <li>
                                                    <Link href="/help-center-detail">
                                                        <a>
                                                            <p>Payment</p>
                                                            <FontAwesomeIcon class="icon" icon={faArrowRight}></FontAwesomeIcon>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/help-center-detail">
                                                        <a>
                                                            <p>Prepay Package Policies</p>
                                                            <FontAwesomeIcon class="icon" icon={faArrowRight}></FontAwesomeIcon>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/help-center-detail">
                                                        <a>
                                                            <p>Storage</p>
                                                            <FontAwesomeIcon class="icon" icon={faArrowRight}></FontAwesomeIcon>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/help-center-detail">
                                                        <a>
                                                            <p>Terms & Conditions</p>
                                                            <FontAwesomeIcon class="icon" icon={faArrowRight}></FontAwesomeIcon>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

