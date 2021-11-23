export default function GetInTouch() {
    return (
      <div className=''>
        <div>
            <section>
                <div class="container form-wrap">
                    <div class="form-wrap-inner">
                        <div class="title">
                            <h4>Getin Touch</h4>
                        </div>
                        <form action="">
                            <div class="form-box" data-aos="fade-up" data-aos-duration="1500">
                                <div class="row">
                                    <div class="col-md-6 col-lg-6 col-xl-6 col-12">
                                        <div class="form-group">
                                            <label for="fname">First Name</label>
                                            <input type="text" id="fname" placeholder="John" ></input>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-xl-6 col-12">
                                        <div class="form-group">
                                            <label for="lname">Last Name</label>
                                            <input type="text" id="lname" placeholder="Doe" ></input>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-12 col-xl-12 col-12">
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <input type="text" id="email" placeholder="name@email.com" ></input>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-12 col-xl-12 col-12">
                                        <div class="form-group">
                                            <label for="phone">Phone</label>
                                            <input type="tel" id="phone" pattern="[0-0]{0}-[0-0]{0}-[0-0]{0}" placeholder="000-000-0000" ></input>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-12 col-xl-12 col-12">
                                        <div class="checkbox-wrap">
                                            <h6>TYPE OF VIRTUAL STAGING</h6>
                                            <div class="form-selection">
                                                <div class="form-checkbox">
                                                    <input type="checkbox" id="vsvr"></input>
                                                    <label for="vsvr">Virtual Stage Vacant Room</label>
                                                </div>
                                                <div class="form-checkbox">
                                                    <input type="checkbox" id="rfr"></input>
                                                    <label for="rfr">Remove Furniture and Restage</label>
                                                </div>
                                                <div class="form-checkbox">
                                                    <input type="checkbox" id="fr"></input>
                                                    <label for="fr">Framed Rendering</label>
                                                </div>
                                                <div class="form-checkbox">
                                                    <input type="checkbox" id="rfp"></input>
                                                    <label for="rfp">Renderings from Floor Plans</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="form-submit-btn">
                                <input type="submit" value="Send" ></input>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
      </div>
    )
  }
  