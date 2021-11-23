import Image from 'next/image'
import Link from 'next/dist/client/link';
import LogoImg from '../images/logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavDropdown } from 'react-bootstrap';

export default function Header() {
  return (
    <div className="themeHeader">
      <header>
        <div className="theme-header">
          <nav>
            <div className="logo">
              <Link href="/">
                <a>
                  <Image src={LogoImg} alt="Logo Image" />
                </a>
              </Link>
            </div>
            <div className="mbl-icons">
                <button className="mbl-admin-button">
                  <Link href="/login">
                    <a><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></a>
                  </Link>
                  </button> 
                <div className="hamburger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
            <ul className="nav-links">
              <li>
                <Link href="/help-center">
                  <a>What We Do</a>
                </Link>
              </li>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link href="/services-standard">Photography</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/services-standard">Videography</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/services-standard">Virtual 3D tours</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/virtual-staging">Virtual staging</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/services-standard">Property sites</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/services-standard">Brochures</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/services-standard">Floor plans</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/services-standard">Agent marketing</Link>
                  </NavDropdown.Item>
              </NavDropdown>
              
              <li><a className="pricing-btn" data-bs-toggle="modal" data-bs-target="#pricingModal">Pricing</a></li>
              {/* <li><a href="#">About Us</a></li> */}
              <li> 
                <Link href="/blog-listing"><a>Blog</a></Link>
              </li>
              <li className="admin-button">
                <Link href="/login">
                  <a><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="contact-btn">Contact Us</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}


// const hamburger = document.querySelector(".hamburger");
//   const navLinks = document.querySelector(".nav-links");
//   const links = document.querySelectorAll(".nav-links li");

//   hamburger.addEventListener('click', ()=>{
//   //Animate Links
//   navLinks.classList.toggle("open");
//   links.forEach(link => {
//       link.classList.toggle("fade");
//   });

//   //Hamburger Animation
//   hamburger.classList.toggle("toggle");
// });
