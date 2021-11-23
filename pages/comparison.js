import Image from 'next/image';
import SlideAfter from '../images/slide-after.png';
import SlideBefore from '../images/slide-before.png';
import Carousel from 'react-bootstrap/Carousel';
export default function Comparison() {
    return (
      <div className=''>
        <div>
            <section>
                <div class="comparison-wrapper">
                    <div class="comparison-wrap-inner">
                        <div class="container comparison-title">
                            <div class="before-title">
                                <h4>Before</h4>
                            </div>
                            <div class="after-title">
                                <h4>After</h4>
                            </div>
                            <div class="line"></div>
                        </div>

                        <div class="comparison-slider">
                            <Carousel>
                                <Carousel.Item className="testimonial">
                                    <div class="comparison-slide">
                                        <div class="row">
                                            <div class="col-md-6 col-lg-6 col-xl-6 col-6 p-0">
                                                <div class="slide-part">
                                                    <Image src={SlideBefore} alt="" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-6 col-xl-6 col-6 p-0">
                                                <div class="slide-part">
                                                    <Image src={SlideAfter} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div class="comparison-slide">
                                        <div class="row">
                                            <div class="col-md-6 col-lg-6 col-xl-6 col-6 p-0">
                                                <div class="slide-part">
                                                    <Image src={SlideAfter} alt="" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-6 col-xl-6 col-6 p-0">
                                                <div class="slide-part">
                                                    <Image src={SlideAfter} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </div>
    )
  }
  