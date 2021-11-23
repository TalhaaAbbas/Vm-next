import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-bootstrap/Modal';
export default function SignupBox() {
    const [lgShow, setLgShow] = useState(false);
    return (
        <div class="col-md-6 col-lg-4 col-xl-4">
            <button onClick={() => setLgShow(true)} class="signup-box" data-aos="fade-up" data-aos-duration="1500">
                <a>
                    <h4>Sign up</h4>
                    <p>Get started today</p>
                </a>
            </button>

            <Modal className="coverLatterModal" size="lg" show={lgShow}  onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                    <h2 class="modal-title" id="coverLatterModal">Join Our Newsletter</h2>
                    <p>Sample Text Here Sample Text Here Sample Text Here</p>
                </Modal.Header>
                <Modal.Body>
                    <div class="cover-latter-wrap">
                        <div class="cover-latter-form">
                            <form action="#">
                                <div class="input-groups">
                                    <label for="">Email</label>
                                    <div class="input-box">
                                        <FontAwesomeIcon className="icon" icon={faEnvelope}></FontAwesomeIcon>
                                        <input type="text" class="form-control input-lg" placeholder="Email" ></input>
                                        <span class="input-group-btn">
                                            <button class="subscribe-btn" type="submit" >join</button>
                                        </span>
                                    </div>
                                    <span>No spam, we hate it more than you do.</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
        
    )
  }
  