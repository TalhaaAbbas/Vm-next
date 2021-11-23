import Image from 'next/image';
import IncludeImage from '../images/mockup.png';

export default function Include() {
    return (
      <div className=''>
        <div>
            <section>
                <div class="include-wraper" data-aos="fade-up" data-aos-duration="1500">
                    <div class="row">
                        <div class="col-md-5 col-lg-5 col-xl-5 col-12 no-p">
                            <div class="include-img" >
                                <Image src={IncludeImage} alt="" />
                            </div>
                        </div>
                        <div class="col-md-7 col-lg-7 col-xl-7 col-12 no-p">
                            <div class="include-info">
                                <div class="include-info-inner">
                                    <span>Videography</span>
                                    <h3>What’s Included</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                                    elit, sed diam nonummy nibh euismod tincidunt ut
                                    laoreet dolore magna aliquam erat Lorem ipsum dolor
                                    sit amet,
                                    consectetuer adipiscinga</p>
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
  