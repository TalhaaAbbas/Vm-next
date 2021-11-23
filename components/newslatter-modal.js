import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-bootstrap/Modal';
import React, {  setShow, useState } from "react";

export default function NewsLatterModal() {
    const [lgShow, setLgShow] = useState(false);
    return (
      <div className=''>
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
  