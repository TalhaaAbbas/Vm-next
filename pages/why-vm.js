import Image from 'next/image'
import quality from '../images/quality.png';
import responsive from '../images/responsive.png';
import customer from '../images/customer.png';
import  Win from '../images/Win.png';
export default function WhyVm() {
  return (
    <div className=''>
      <div>
        <section>
            <div class="visual-market">
                <div class="market-wrap">
                    <div class="title-wrap">
                        <h3 class="title">Why VisualMarketing?</h3>
                        <span>Why We’re Different</span>
                    </div>
                    <div class="market-points-list">
                        <div class="row">
                            <div class="col-md-6 col-lg-4 col-xl-3 col-12 no-p">
                                <div class="market-point" data-aos="zoom-in-right" data-aos-duration="1500">
                                    <div class="market-img">
                                        <Image src={quality} alt="service Image" />
                                    </div>
                                    <div class="market-includes">
                                        <h5>HIGH QUALITY</h5>
                                        <p>Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit, sed
                                            diam nonummy nibh euismod
                                            tincidunt ut laoreet dolore
                                            magna aliquam</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 col-xl-3 col-12 no-p">
                                <div class="market-point" data-aos="zoom-in-right" data-aos-duration="1500">
                                    <div class="market-img">
                                        <Image src={responsive} />
                                    </div>
                                    <div class="market-includes">
                                        <h5>RESPONSIVENESS</h5>
                                        <p>Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit, sed
                                            diam nonummy nibh euismod
                                            tincidunt ut laoreet dolore
                                            magna aliquam</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 col-xl-3 col-12 no-p">
                                <div class="market-point" data-aos="zoom-in-right" data-aos-duration="1500">
                                    <div class="market-img">
                                        <Image src={customer} />
                                    </div>
                                    <div class="market-includes">
                                        <h5>CUSTOMER SERVICE</h5>
                                        <p>Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit, sed
                                            diam nonummy nibh euismod
                                            tincidunt ut laoreet dolore
                                            magna aliquam</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 col-xl-3 col-12 no-p">
                                <div class="market-point" data-aos="zoom-in-right" data-aos-duration="1500">
                                    <div class="market-img">
                                        <Image src={Win} />
                                    </div>
                                    <div class="market-includes">
                                        <h5>Win Listings</h5>
                                        <p>Lorem ipsum dolor sit amet,
                                            consectetuer adipiscing elit, sed
                                            diam nonummy nibh euismod
                                            tincidunt ut laoreet dolore
                                            magna aliquam</p>
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
