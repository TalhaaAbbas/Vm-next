
export default function Process(props) {

    return (
    <div className=''>
      <div>
      { props.ishome }
        {/* process section  */}
        <section>
            <div class="process-section">
                <div class="container">
                    <div class="process-inner">
                        <div class="title-wrap">
                            <h3 class="title">Our Process</h3>
                        </div>
                        <div class="process-inner-list">
                            <div class="list-items-grid">
                                <div class="grid-item" data-aos="fade-right" data-aos-duration="1500">
                                    <div class="grid-number-wrap">
                                        <div class="grid-number">01</div>
                                    </div>
                                    <div class="grid-info">
                                        <div class="grid-info-inner">
                                            <h4>TURNAROUND TIME</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                elit, sed diam nonummy nibh euismod tincidunt ut
                                                laoreet dolore magna aliquam erat Lorem ipsum dolor
                                                sit amet,
                                                consectetuer adipiscinga</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item" data-aos="fade-left" data-aos-duration="1500">
                                    <div class="grid-number-wrap">
                                        <div class="grid-number">02</div>
                                    </div>
                                    <div class="grid-info">
                                        <div class="grid-info-inner">
                                            <h4>BOOKING RESPONSE TIME</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                elit, sed diam nonummy nibh euismod tincidunt ut
                                                laoreet dolore magna aliquam erat Lorem ipsum dolor
                                                sit amet,
                                                consectetuer adipiscinga</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="grid-item" data-aos="fade-right" data-aos-duration="1500">
                                    <div class="grid-number-wrap">
                                        <div class="grid-number">03</div>
                                    </div>
                                    <div class="grid-info">
                                        <HomeProcess />
                                        {/* if {
                                            ishome (true),
                                        } else{
                                            <ServiceProcess/>
                                        } */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </div>
  )
}
function HomeProcess(props) {
    return  <div class="grid-info-inner">
                <h4>FIND OUT MORE</h4>
                <div class="learn-more">
                    <div class="black-button">
                        <a href="help-center.php">Learn More</a>
                    </div>
                </div>
            </div>
}
  
function ServiceProcess(props) {
    return <div class="grid-info-inner">
                <h4>POST PRODUCTION</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat Lorem ipsum dolor
                    sit amet,
                    consectetuer adipiscinga</p>
            </div>
}
