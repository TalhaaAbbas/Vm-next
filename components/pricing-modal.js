import Modal from 'react-bootstrap/Modal';
import React, { setShow, useState } from "react";
import { EventHandler } from "react";   
export default function PricingModal() {

    const [lgShow, setLgShow] = useState(false);

    return (
        <div>
            <Modal  class="modal fade pricingModal" size="xl" show={lgShow}  onHide={() => setXlShow(false)}>
                <Modal.Header class="modal-header" closeButton>
                    <Modal.Title class="modal-title" id="pricingModalLabel">Pricing Calculator</Modal.Title>
                </Modal.Header>
                <Modal.Body class="modal-body">
                    <div class="steps-system-wrap">
                        <div class="step-system-inner">
                            <div class="steps-info">
                                <p>Step <span id="slide-steps">1</span> of 9</p>
                                <form id="msform">
                                    {/* <!-- progressbar --> */}
                                    <ul id="progressbar" class="progressbar">
                                        <li class="active" id="service"></li>
                                        <li id="photography"></li>
                                        <li id="photoCount"></li>
                                        <li id="addOn"></li>
                                        <li id="homeArea"></li>
                                        <li id="orderVideo"></li>
                                        <li id="propertyInfo"></li>
                                        <li id="Scheudling"></li>
                                        <li id="auth"></li>
                                    </ul> 

                                    {/* <!-- fieldsets --> */}
                                    <fieldset >
                                        <div class="form-card">
                                            <h2 class="fc-title">WHAT SERVICES DO YOU NEED?</h2>
                                            <div class="services-checklist">
                                                <ul>
                                                    <li>
                                                        <span>
                                                            <span>01</span>
                                                            <p>Photos</p>
                                                            <div class="checkbox-wrap">
                                                                <a  data-bs-toggle="modal" data-bs-target="#viewExampleModal">View Example</a>
                                                                <div class="check-field">
                                                                    <input type="checkbox" id="photos" />
                                                                    <label for="photos"></label>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <span>02</span>
                                                            <p>Videos</p>
                                                            <div class="checkbox-wrap">
                                                                <a data-bs-toggle="modal" data-bs-target="#viewExampleModal">View Example</a>
                                                                <div class="check-field">
                                                                    <input type="checkbox" id="videos" />
                                                                    <label for="videos"></label>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <span>03</span>
                                                            <p>Matterport</p>
                                                            <div class="checkbox-wrap">
                                                                <a data-bs-toggle="modal" data-bs-target="#viewExampleModal">View Example</a>
                                                                <div class="check-field">
                                                                    <input type="checkbox" id="Matterport" />
                                                                    <label for="Matterport"></label>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <span>04</span>
                                                            <p>Zillow 3D Tour</p>
                                                            <div class="checkbox-wrap">
                                                                <a data-bs-toggle="modal" data-bs-target="#viewExampleModal">View Example</a>
                                                                <div class="check-field">
                                                                    <input type="checkbox" id="zillow" />
                                                                    <label for="zillow"></label>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <span>05</span>
                                                            <p>Floor Plans</p>
                                                            <div class="checkbox-wrap">
                                                                <a data-bs-toggle="modal" data-bs-target="#viewExampleModal">View Example</a>
                                                                <div class="check-field">
                                                                    <input type="checkbox" id="floorPlans" />
                                                                    <label for="floorPlans"></label>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </li>
                                                </ul>
                                                <div class="option">
                                                    <p>Don’t see what you’re looking for? <a href="contact-us.php">Click here</a></p>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="pricing-buttons">
                                            <div class="pricing-buttons-inner">
                                                <div class="current-price">
                                                    <p>Current Price:</p>
                                                    <h5>$5,000</h5>
                                                </div>
                                                <input type="button" name="next" class="next action-button" value="Continue" />
                                            </div>
                                        </div>
                                    </fieldset>

                                    {/* <!-- style  --> */}
                                    <fieldset >
                                        <div class="form-card">
                                            <h2 class="fs-title">WHAT STYLE PHOTOGRAPHY?</h2>
                                            <div class="price-style-wrap">
                                                <div class="row">
                                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                                        <div class="style-item">
                                                            <input class="checkbox-tools" type="radio" name="tools" id="standard" />
                                                            <label class="for-checkbox-tools" for="standard" data-checked-value="standard">
                                                                <div class="check-mark">
                                                                    <i class="fa fa-check"></i>
                                                                </div>
                                                                <h4>STANDARD</h4>
                                                                <div class="style-img">
                                                                    <a href="images/blog-img.png" class="img-zoom-link" data-fancybox="images">
                                                                        <img src="images/blog-img.png" alt="" />
                                                                        <div class="search-icon">
                                                                            <i class="fa fa-search"></i>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div class="features">
                                                                    <ul>
                                                                        <li>Most popular</li>
                                                                        <li>HDR photography</li>
                                                                        <li>Blue sky enhancement</li>
                                                                        <li>Great value</li>
                                                                    </ul>
                                                                    <div class="priceforthis">
                                                                        <h5>Price: <span>$00.00</span></h5>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                                        <div class="style-item">
                                                            <input class="checkbox-tools" type="radio" name="tools" id="luxury" />
                                                            <label class="for-checkbox-tools" for="luxury" data-checked-value="luxury">
                                                                <div class="check-mark">
                                                                    <i class="fa fa-check"></i>
                                                                </div>
                                                                <h4>STANDARD</h4>
                                                                <div class="style-img">
                                                                    <a href="images/room.png" class="img-zoom-link" data-fancybox="images">
                                                                        <img src="images/room.png" alt="" />
                                                                        <div class="search-icon">
                                                                            <i class="fa fa-search"></i>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div class="features">
                                                                    <ul>
                                                                        <li>Highest quality</li>
                                                                        <li>Clear Window Views</li>
                                                                        <li>Green Grass</li>
                                                                        <li>Enhancement (if necessary)</li>
                                                                    </ul>
                                                                    <div class="priceforthis">
                                                                        <h5>Price: <span>$00.00</span></h5>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="pricing-buttons">
                                            <div class="pricing-buttons-inner">
                                                <input type="button" name="previous" class=" previous action-button-previous" value="GO BACK" /> 

                                                <div class="current-price">
                                                    <p>Current Price:</p>
                                                    <h5>$5,000</h5>
                                                </div>
                                                <input type="button" name="next" class="next action-button" value="Continue" />
                                            </div>
                                        </div>
                                    </fieldset>

                                    {/* <!-- photos  --> */}
                                    <fieldset>
                                        <div class="form-card">
                                            <h2 class="fs-title">HOW MANY PHOTOS WOULD YOU LIKE?</h2>
                                            <div class="photo-count-wrap">
                                                <div class="row">
                                                    <div class="col-md-4 col-lg-4 col-xl-4 col-6">
                                                        <div class="style-item">
                                                            <input class="checkbox-tools" type="radio" name="tools" id="15photo" />
                                                            <label class="for-checkbox-tools" for="15photo" data-checked-value="15photo">
                                                                <div class="check-mark">
                                                                    <i class="fa fa-check"></i>
                                                                </div>
                                                                <div class="photo-count-box">
                                                                    <div class="img-icon-box">
                                                                        <div class="img-icon">
                                                                            <img src="images/photo-icon.svg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-count">
                                                                        <h5>15</h5>
                                                                        <p>Photos</p>
                                                                    </div>
                                                                    <div class="stat-tag">
                                                                        <p>Popular</p>
                                                                    </div>
                                                                    <div class="priceforthis">
                                                                        <h5>Price: <span>$00.00</span></h5>
                                                                    </div>  
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4 col-xl-4 col-6">
                                                        <div class="style-item">
                                                            <input class="checkbox-tools" type="radio" name="tools" id="25photo" />
                                                            <label class="for-checkbox-tools" for="25photo" data-checked-value="25photo">
                                                                <div class="check-mark">
                                                                    <i class="fa fa-check"></i>
                                                                </div>
                                                                <div class="photo-count-box">
                                                                    <div class="img-icon-box">
                                                                        <div class="img-icon">
                                                                            <img src="images/photo-icon.svg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-count">
                                                                        <h5>30</h5>
                                                                        <p>Photos</p>
                                                                    </div>
                                                                    <div class="stat-tag">
                                                                        <p>Popular</p>
                                                                    </div>
                                                                    <div class="priceforthis">
                                                                        <h5>Price: <span>$00.00</span></h5>
                                                                    </div>  
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4 col-xl-4 col-6">
                                                        <div class="style-item">
                                                            <input class="checkbox-tools" type="radio" name="tools" id="40photo" />
                                                            <label class="for-checkbox-tools" for="40photo" data-checked-value="40photo">
                                                                <div class="check-mark">
                                                                    <i class="fa fa-check"></i>
                                                                </div>
                                                                <div class="photo-count-box">
                                                                    <div class="img-icon-box">
                                                                        <div class="img-icon">
                                                                            <img src="images/photo-icon.svg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-count">
                                                                        <h5>50</h5>
                                                                        <p>Photos</p>
                                                                    </div>
                                                                    <div class="stat-tag">
                                                                        <p>Popular</p>
                                                                    </div>
                                                                    <div class="priceforthis">
                                                                        <h5>Price: <span>$00.00</span></h5>
                                                                    </div>  
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="pricing-buttons">
                                            <div class="pricing-buttons-inner">
                                                <input type="button" name="previous" class=" previous action-button-previous" value="GO BACK" /> 

                                                <div class="current-price">
                                                    <p>Current Price:</p>
                                                    <h5>$5,000</h5>
                                                </div>
                                                <input type="button" name="next" class="next action-button" value="Continue" />
                                            </div>
                                        </div>
                                    </fieldset>
                                    {/* <!-- add on services  --> */}
                                    <fieldset>
                                        <div class="form-card">
                                            <h2 class="fs-title">ADD ON SERVICES</h2>
                                            <div class="addon-services-wrap">
                                                <div class="row">
                                                    <div class="col-md-3 col-lg-3 col-xl-3 col-6">
                                                        <div class="style-item">
                                                            <input class="checkbox-tools" type="checkbox" name="tools" id="aerial" />
                                                            <label class="for-checkbox-tools" for="aerial" data-checked-value="aerial">
                                                                <div class="check-mark">
                                                                    <i class="fa fa-check"></i>
                                                                </div>
                                                                <div class="addon-service">
                                                                    <div class="img-icon-box">
                                                                        <div class="img-icon">
                                                                            <img src="images/aerial.png" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="title">
                                                                        <p>AERIAL PHOTOGRAPHY</p>
                                                                    </div>
                                                                    <div class="view-example-btn">
                                                                        <a data-bs-toggle="modal" data-bs-target="#viewExampleModal">VIEW EXAMPLE</a>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-lg-3 col-xl-3 col-6">
                                                        <div class="style-item">
                                                            <input class="checkbox-tools" type="checkbox" name="tools" id="dusk" />
                                                            <label class="for-checkbox-tools" for="dusk" data-checked-value="dusk">
                                                                <div class="check-mark">
                                                                    <i class="fa fa-check"></i>
                                                                </div>
                                                                <div class="addon-service">
                                                                    <div class="img-icon-box">
                                                                        <div class="img-icon">
                                                                            <img src="images/photo-icon.svg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="title">
                                                                        <p>DUSK PHOTOGRAPHY</p>
                                                                    </div>
                                                                    <div class="view-example-btn">
                                                                        <a data-bs-toggle="modal" data-bs-target="#viewExampleModal">VIEW EXAMPLE</a>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-lg-3 col-xl-3 col-6">
                                                        <div class="style-item">
                                                            <input class="checkbox-tools" type="checkbox" name="tools" id="virtual" checked ="checked" />
                                                            <label class="for-checkbox-tools" for="virtual" data-checked-value="virtual">
                                                                <div class="check-mark">
                                                                    <i class="fa fa-check"></i>
                                                                </div>
                                                                <div class="addon-service">
                                                                    <div class="img-icon-box">
                                                                        <div class="img-icon">
                                                                            <img src="images/photo-icon.svg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="title">
                                                                        <p>AERIAL DUSK</p>
                                                                    </div>
                                                                    <div class="view-example-btn">
                                                                        <a data-bs-toggle="modal" data-bs-target="#viewExampleModal">VIEW EXAMPLE</a>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-lg-3 col-xl-3 col-6">
                                                        <div class="style-item">
                                                            <input class="checkbox-tools" type="checkbox" name="tools" id="aerialdusk" />
                                                            <label class="for-checkbox-tools" for="aerialdusk" data-checked-value="aerialdusk">
                                                                <div class="check-mark">
                                                                    <i class="fa fa-check"></i>
                                                                </div>
                                                                <div class="addon-service">
                                                                    <div class="img-icon-box">
                                                                        <div class="img-icon">
                                                                            <img src="images/photo-icon.svg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="title">
                                                                        <p>Virtual Staging</p>
                                                                    </div>
                                                                    <div class="view-example-btn">
                                                                        <a data-bs-toggle="modal" data-bs-target="#viewExampleModal">VIEW EXAMPLE</a>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-lg-3 col-xl-3 col-6">
                                                        <div class="style-item">
                                                            <input class="checkbox-tools" type="checkbox" name="tools" id="propertySite" />
                                                            <label class="for-checkbox-tools" for="propertySite" data-checked-value="propertySite">
                                                                <div class="check-mark">
                                                                    <i class="fa fa-check"></i>
                                                                </div>
                                                                <div class="addon-service">
                                                                    <div class="img-icon-box">
                                                                        <div class="img-icon">
                                                                            <img src="images/site.png" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="title">
                                                                        <p>PROPERTY SITE</p>
                                                                    </div>
                                                                    <div class="view-example-btn">
                                                                        <a data-bs-toggle="modal" data-bs-target="#viewExampleModal">VIEW EXAMPLE</a>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-lg-3 col-xl-3 col-6">
                                                        <div class="style-item">
                                                            <input class="checkbox-tools" type="checkbox" name="tools" id="2PG" />
                                                            <label class="for-checkbox-tools" for="2PG" data-checked-value="2PG">
                                                                <div class="check-mark">
                                                                    <i class="fa fa-check"></i>
                                                                </div>
                                                                <div class="addon-service">
                                                                    <div class="img-icon-box">
                                                                        <div class="img-icon">
                                                                            <img src="images/2pg.png" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="title">
                                                                        <p>2PG BROCHURE</p>
                                                                    </div>
                                                                    <div class="view-example-btn">
                                                                        <a data-bs-toggle="modal" data-bs-target="#viewExampleModal">VIEW EXAMPLE</a>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-lg-3 col-xl-3 col-6">
                                                        <div class="style-item">
                                                            <input class="checkbox-tools" type="checkbox" name="tools" id="4PG" />
                                                            <label class="for-checkbox-tools" for="4PG" data-checked-value="4PG">
                                                                <div class="check-mark">
                                                                    <i class="fa fa-check"></i>
                                                                </div>
                                                                <div class="addon-service">
                                                                    <div class="img-icon-box">
                                                                        <div class="img-icon">
                                                                            <img src="images/4pg.png" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="title">
                                                                        <p>4PG BROCHURE</p>
                                                                    </div>
                                                                    <div class="view-example-btn">
                                                                        <a data-bs-toggle="modal" data-bs-target="#viewExampleModal">VIEW EXAMPLE</a>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-3 col-lg-3 col-xl-3 col-6">
                                                        <div class="style-item">
                                                            <input class="checkbox-tools" type="checkbox" name="tools" id="8PG" />
                                                            <label class="for-checkbox-tools" for="8PG" data-checked-value="8PG">
                                                                <div class="check-mark">
                                                                    <i class="fa fa-check"></i>
                                                                </div>
                                                                <div class="addon-service">
                                                                    <div class="img-icon-box">
                                                                        <div class="img-icon">
                                                                            <img src="images/8pg.png" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="title">
                                                                        <p>8PG BROCHURE</p>
                                                                    </div>
                                                                    <div class="view-example-btn">
                                                                        <a data-bs-toggle="modal" data-bs-target="#viewExampleModal">VIEW EXAMPLE</a>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="pricing-buttons">
                                            <div class="pricing-buttons-inner">
                                                <input type="button" name="previous" class=" previous action-button-previous" value="GO BACK" /> 

                                                <div class="current-price">
                                                    <p>Current Price:</p>
                                                    <h5>$5,000</h5>
                                                </div>
                                                <input type="button" name="next" class="next action-button" value="Continue" />
                                            </div>
                                        </div>
                                    </fieldset>

                                    {/* <!-- Home area  --> */}
                                    <fieldset>
                                        <div class="form-card">
                                            <h2 class="fs-title">Approximately how large is the home?</h2>
                                            <div class="photo-count-wrap">
                                                <div class="row">
                                                    <div class="col-md-4 col-lg-4 col-xl-4 col-6">
                                                        <div class="style-item">
                                                            <input class="checkbox-tools" type="radio" name="tools" id="2000sf" />
                                                            <label class="for-checkbox-tools" for="2000sf" data-checked-value="200sf">
                                                                <div class="check-mark">
                                                                    <i class="fa fa-check"></i>
                                                                </div>
                                                                <div class="photo-count-box">
                                                                    <div class="img-icon-box">
                                                                        <div class="img-icon">
                                                                            <img src="images/photo-icon.svg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-count">
                                                                        <h5>Up to 2000</h5>
                                                                        <p>Square Feet</p>
                                                                    </div>
                                                                    <div class="stat-tag">
                                                                        <p>Popular</p>
                                                                    </div>
                                                                    <div class="priceforthis">
                                                                        <h5>Price: <span>$00.00</span></h5>
                                                                    </div>  
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4 col-xl-4 col-6">
                                                        <div class="style-item">
                                                            <input class="checkbox-tools" type="radio" name="tools" id="2kto5ksf" />
                                                            <label class="for-checkbox-tools" for="2kto5ksf" data-checked-value="2kto5ksf">
                                                                <div class="check-mark">
                                                                    <i class="fa fa-check"></i>
                                                                </div>
                                                                <div class="photo-count-box">
                                                                    <div class="img-icon-box">
                                                                        <div class="img-icon">
                                                                            <img src="images/photo-icon.svg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-count">
                                                                        <h5>2000-5000</h5>
                                                                        <p>Square Feet</p>
                                                                    </div>
                                                                    <div class="stat-tag">
                                                                        <p>Popular</p>
                                                                    </div>
                                                                    <div class="priceforthis">
                                                                        <h5>Price: <span>$00.00</span></h5>
                                                                    </div>  
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4 col-lg-4 col-xl-4 col-6">
                                                        <div class="style-item">
                                                            <input class="checkbox-tools" type="radio" name="tools" id="5000sf" />
                                                            <label class="for-checkbox-tools" for="5000sf" data-checked-value="5000sf">
                                                                <div class="check-mark">
                                                                    <i class="fa fa-check"></i>
                                                                </div>
                                                                <div class="photo-count-box">
                                                                    <div class="img-icon-box">
                                                                        <div class="img-icon">
                                                                            <img src="images/photo-icon.svg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-count">
                                                                        <h5>5000+</h5>
                                                                        <p>Square Feet</p>
                                                                    </div>
                                                                    <div class="stat-tag">
                                                                        <p>Popular</p>
                                                                    </div>
                                                                    <div class="priceforthis">
                                                                        <h5>Price: <span>$00.00</span></h5>
                                                                    </div>  
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="disclaimer">
                                                    <p> <span>*</span> You will be billed based off of 2000 sq ft. Overage fees will apply for properties larger than the 2000 sq ft threshold. Please select the approximate size of the home so we can budget our Field Operator's time accordingly</p>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="pricing-buttons">
                                            <div class="pricing-buttons-inner">
                                                <input type="button" name="previous" class=" previous action-button-previous" value="GO BACK" /> 

                                                <div class="current-price">
                                                    <p>Current Price:</p>
                                                    <h5>$5,000</h5>
                                                </div>
                                                <input type="button" name="next" class="next action-button" value="Continue" />
                                            </div>
                                        </div>
                                    </fieldset>

                                    {/* <!-- home area size  --> */}
                                    {/* <!-- <fieldset>
                                        <div class="form-card">
                                            <h2 class="fs-title">APPROXIMATELY HOW LARGE IS THE HOME?</h2>
                                            <div class="area-selection-wrap">
                                                <div class="slider">
                                                    <div class="style-item">
                                                        <input class="checkbox-tools" type="radio" name="tools" id="area2000fs" />
                                                        <label class="for-checkbox-tools" for="area2000fs" data-checked-value="area2000fs">
                                                            <div class="check-mark">
                                                                <i class="fa fa-check"></i>
                                                            </div>
                                                            <div class="area-selection-box">
                                                                <div class="img-icon-box">
                                                                    <div class="img-icon">
                                                                        <img src="images/photo-icon.svg" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div class="area">
                                                                    <h5>2000 SF</h5>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div class="style-item">
                                                        <input class="checkbox-tools" type="radio" name="tools" id="area2500fs" />
                                                        <label class="for-checkbox-tools" for="area2500fs" data-checked-value="area2500fs">
                                                            <div class="check-mark">
                                                                <i class="fa fa-check"></i>
                                                            </div>
                                                            <div class="area-selection-box">
                                                                <div class="img-icon-box">
                                                                    <div class="img-icon">
                                                                        <img src="images/photo-icon.svg" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div class="area">
                                                                    <h5>2500 SF</h5>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div class="style-item">
                                                        <input class="checkbox-tools" type="radio" name="tools" id="area3000fs" />
                                                        <label class="for-checkbox-tools" for="area3000fs" data-checked-value="area3000fs">
                                                            <div class="check-mark">
                                                                <i class="fa fa-check"></i>
                                                            </div>
                                                            <div class="area-selection-box">
                                                                <div class="img-icon-box">
                                                                    <div class="img-icon">
                                                                        <img src="images/photo-icon.svg" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div class="area">
                                                                    <h5>3000 SF</h5>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div class="style-item">
                                                        <input class="checkbox-tools" type="radio" name="tools" id="area3500fs" />
                                                        <label class="for-checkbox-tools" for="area3500fs" data-checked-value="area3500fs">
                                                            <div class="check-mark">
                                                                <i class="fa fa-check"></i>
                                                            </div>
                                                            <div class="area-selection-box">
                                                                <div class="img-icon-box">
                                                                    <div class="img-icon">
                                                                        <img src="images/photo-icon.svg" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div class="area">
                                                                    <h5>3500 SF</h5>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="pricing-buttons">
                                            <div class="pricing-buttons-inner">
                                                <input type="button" name="previous" class=" previous action-button-previous" value="GO BACK" /> 

                                                <div class="current-price">
                                                    <p>Current Price:</p>
                                                    <h5>$5,000</h5>
                                                </div>
                                                <input type="button" name="next" class="next action-button" value="Continue" />
                                            </div>
                                        </div>
                                    </fieldset> --> */}
                                    {/* <!-- video  --> */}
                                    <fieldset >
                                        <div class="form-card">
                                            <h2 class="fs-title">FOR ALL ORDERS WITH VIDEO</h2>
                                            <div class="order-video-wrap">
                                                <div class="row">
                                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                                        <div class="style-item">
                                                            <input class="checkbox-tools" type="radio" name="tools" id="agentFeature" />
                                                            <label class="for-checkbox-tools" for="agentFeature" data-checked-value="agentFeature">
                                                                <div class="check-mark">
                                                                    <i class="fa fa-check"></i>
                                                                </div>
                                                                <h4>ADD AGENT FEATURE</h4>
                                                                <div class="style-img">
                                                                    <img src="images/blog-img.png" alt="" />
                                                                    <div class="search-icon">
                                                                        <a href="">
                                                                            <i class="fa fa-search"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="priceforthis">
                                                                    <h5>Price: <span>$00.00</span></h5>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                                        <div class="style-item">
                                                            <input class="checkbox-tools" type="radio" name="tools" id="addAerial" />
                                                            <label class="for-checkbox-tools" for="addAerial" data-checked-value="addAerial">
                                                                <div class="check-mark">
                                                                    <i class="fa fa-check"></i>
                                                                </div>
                                                                <h4>ADD AERIAL</h4>
                                                                <div class="style-img">
                                                                    <img src="images/room.png" alt="" />
                                                                    <div class="search-icon">
                                                                        <a href="">
                                                                            <i class="fa fa-search"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="priceforthis">
                                                                    <h5>Price: <span>$00.00</span></h5>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="pricing-buttons">
                                            <div class="pricing-buttons-inner">
                                                <input type="button" name="previous" class=" previous action-button-previous" value="GO BACK" /> 

                                                <div class="current-price">
                                                    <p>Current Price:</p>
                                                    <h5>$5,000</h5>
                                                </div>
                                                <input type="button" name="next" class="next action-button" value="Continue" />
                                            </div>
                                        </div>
                                    </fieldset>

                                    {/* <!-- property info  --> */}
                                    <fieldset >
                                        <div class="form-card">
                                            <h2 class="fs-title">Property information</h2>
                                            <div class="property-info-wrap">
                                                <div class="price-modal-form">
                                                    <div class="form-group">
                                                        <label for="propertyAddress">Property Address</label>
                                                        <input type="text" class="form-control" id="propertyAddress" placeholder="Enter Property Location / Address" name="propertyAddress" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="additionalInfo">ADDITIONAL INFORMATION</label>
                                                        <textarea type="text" class="form-control" id="additionalInfo" placeholder="Ex: lock box code, homeowners will be present, contact assistant at 555-1234 etc" name="additionalInfo"></textarea>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="shots">Must have shots</label>
                                                        <textarea type="text" class="form-control" id="shots" placeholder="Ex: Expansive backyard, park across street, open floor plan, updated feature in home, etc" name="shots"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="pricing-buttons">
                                            <div class="pricing-buttons-inner">
                                                <input type="button" name="previous" class=" previous action-button-previous" value="GO BACK" /> 
                                                <input type="button" name="next" class="next action-button" value="Continue" />
                                            </div>
                                        </div>
                                    </fieldset>

                                    {/* <!-- login / register  --> */}

                                    <fieldset >
                                        <div class="form-card">
                                            {/* <!-- <h2 class="fs-title"></h2> --> */}
                                            <div class="scheduling-wrap">
                                                <div class="price-modal-form">
                                                    <div class="row">
                                                        <div class="col-md-12 col-12">
                                                            <div class="auth-titles">
                                                                <h3>Login</h3>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 col-12">
                                                            <div class="form-group">
                                                                <label for="ulogemail">Email</label>
                                                                <input type="email" class="form-control email" id="ulogemail" placeholder="Email" name="ulogemail" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 col-12">
                                                            <div class="form-group">
                                                                <label for="loginpassword">Password</label>
                                                                <input type="password" class="form-control pass" id="loginpassword" placeholder="Password" name="loginpassword" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 col-12">
                                                            <div class="or">
                                                                <h5>Or</h5>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 col-12">
                                                            <div class="auth-titles">
                                                                <h3>Register</h3>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-12">
                                                            <div class="form-group">
                                                                <label for="fname">First Name</label>
                                                                <input type="text" class="form-control user" id="fname" placeholder="First Name" name="fname" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-12">
                                                            <div class="form-group">
                                                                <label for="lname">Last Name</label>
                                                                <input type="text" class="form-control user" id="lname" placeholder="Last Name" name="lname" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-12">
                                                            <div class="form-group">
                                                                <label for="uregemail">Email</label>
                                                                <input type="email" class="form-control email" id="uregemail" placeholder="Email" name="uregemail" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-12">
                                                            <div class="form-group">
                                                                <label for="urphone">Phone</label>
                                                                <input type="phone" class="form-control phone" id="urphone" placeholder="Phone" name="urphone" />
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="form-group">
                                                                <label for="regbname">Brokerage Name</label>
                                                                <input type="text" class="form-control user" id="regbname" placeholder="Brokerage Name" name="regbname" />
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="form-group">
                                                                <label for="regbcity">Brokerage City</label>
                                                                <input type="text" class="form-control city" id="regbcity" placeholder="Brokerage City" name="regbcity" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-12">
                                                            <div class="form-group">
                                                                <label for="uregpass">Password</label>
                                                                <input type="password" class="form-control pass" id="uregpass" placeholder="Password" name="uregpass" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-12">
                                                            <div class="form-group">
                                                                <label for="uconfirmpass">Confirm Password</label>
                                                                <input type="password" class="form-control pass" id="uconfirmpass" placeholder="Confirm Password" name="uconfirmpass" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="pricing-buttons">
                                            <div class="pricing-buttons-inner">
                                                <input type="button" name="previous" class=" previous action-button-previous" value="GO BACK" /> 
                                                <input type="button" name="next" class="next action-button" value="Continue" />
                                            </div>
                                        </div>
                                        
                                    </fieldset>

                                    {/* <!-- schedule date  --> */}
                                    <fieldset >
                                        <div class="form-card">
                                            <h2 class="fs-title">Scheudling</h2>
                                            <div class="scheduling-wrap">
                                                <div class="price-modal-form">
                                                    <div class="row">
                                                        <div class="col-md-6 col-12">
                                                            <div class="date-group">
                                                                <label>REQUEST A DATE: </label>
                                                                <div id="datepicker" class="input-group date" data-date-format="mm-dd-yyyy">
                                                                    <input class="form-control date" type="text" placeholder="mm/dd/yy" readonly />
                                                                    <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-12">
                                                            <div class="form-group">
                                                                <label for="scheduletime">Anytime</label>
                                                                <select name="cars" id="scheduletime" class="anytime">
                                                                    <option value="9AM-12PM">9AM-12PM</option>
                                                                    <option value="10AM-1PM">10AM-1PM</option>
                                                                    <option value="11AM-2PM">11AM-2PM</option>
                                                                    <option value="12PM-3PM">12PM-3PM</option>
                                                                    <option value="1PM-4PM">1PM-4PM</option>
                                                                    <option value="2PM-5PM">2PM-5PM</option>
                                                                    <option value="3PM-6PM">3PM-6PM</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-12">
                                                            <div class="form-group">
                                                                <label for="schname">first Name</label>
                                                                <input type="text" class="form-control user" id="firstName" placeholder="First Name" name="firstName" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-12">
                                                            <div class="form-group">
                                                                <label for="schname">Last Name</label>
                                                                <input type="text" class="form-control user" id="lastName" placeholder="Last Name" name="lastName" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-12">
                                                            <div class="form-group">
                                                                <label for="uschemail">Email</label>
                                                                <input type="email" class="form-control email" id="uschemail" placeholder="Email" name="uschemail" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6 col-12">
                                                            <div class="form-group">
                                                                <label for="uschphone">Phone</label>
                                                                <input type="phone" class="form-control phone" id="uschphone" placeholder="Phone" name="uschphone" />
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="form-group itemWrapper">
                                                                <label for="homeowner">homeowner info <small>(Optional)</small></label>
                                                                <input class="itemCheck" type="checkbox" value="1" id="homeowner" />
                                                                <div class="showContainer d-none" >
                                                                    <div class="row inner-field">
                                                                        <div class="col-md-6 col-12 ps-0">
                                                                            <div class="form-group">
                                                                                <label for="honame">Homeowner Name</label>
                                                                                <input type="text" class="form-control user" id="honame" placeholder="Homeowner Name" name="honame" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-6 col-12 pe-0">
                                                                            <div class="form-group">
                                                                                <label for="email">Email &nbsp;&nbsp;<small></small></label>
                                                                                <input type="email" class="form-control email" id="uhemail" placeholder="Email" name="uhemail" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="emailowner">
                                                                        <div class="check-field">
                                                                            <input type="checkbox" id="confirmation" />
                                                                            <label for="confirmation">Send email confirmation to the homeowner.</label>
                                                                        </div>
                                                                        <p>*Homeowner will not receive an email until the order is confirmed</p>
                                                                    </div>
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="form-group itemWrapper">
                                                                <label for="onbehalf">Orderinig on behalf of <small>(Optional)</small></label>
                                                                <input class="itemCheck" type="checkbox" value="1" id="onbehalf" />
                                                                <div class="showContainer d-none" >
                                                                    <div class="row inner-field">
                                                                        <div class="col-md-6 col-12 pl-0">
                                                                            <div class="form-group">
                                                                                <label for="pname">Person's name</label>
                                                                                <input type="text" class="form-control user" id="pname" placeholder="Person's Name" name="pname" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-6 col-12 pr-0">
                                                                            <div class="form-group">
                                                                                <label for="uobphone">Phone</label>
                                                                                <input type="phone" class="form-control phone" id="uobphone" placeholder="Phone" name="uobphone" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-6 col-12 pl-0">
                                                                            <div class="form-group">
                                                                                <label for="brokername">Brokerage Name</label>
                                                                                <input type="text" class="form-control user" id="brokername" placeholder="Brokerage Name" name="brokername" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-6 col-12 pr-0">
                                                                            <div class="form-group">
                                                                                <label for="bcity">Brokerage City</label>
                                                                                <input type="text" class="form-control city" id="bcity" placeholder="Brokerage City" name="bcity" />
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
                                        <div class="pricing-buttons">
                                            <div class="pricing-buttons-inner">
                                                <input type="button" name="previous" class=" previous action-button-previous" value="GO BACK" /> 
                                                <input type="button" name="next" class="action-button" value="Continue" data-bs-dismiss="modal" />
                                            </div>
                                        </div>
                                        
                                    </fieldset>

                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Modal */}
            <Modal class="modal fade viewExampleModal" id="viewExampleModal" tabindex="-1" aria-labelledby="viewExampleModal" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="example-modal-inner">
                            <img src="images/auth-portal.png" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
