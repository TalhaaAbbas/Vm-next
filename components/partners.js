import Image from 'next/image'
import PartnersImg from '../images/partner.png';
export default function Partners() {
  return (
    <div className=''>
      <div> 
      <section> 
            <div class="container-fluid">
                <div class="partners-section">
                    <div class="partner-inner">
                        <div class="row align-center" data-aos="fade-up" data-aos-duration="1500">
                            <div class="col-md-6 col-lg-6 col-xl-6">
                                <div class="partner-left">
                                    <h4>A Scalable Partner</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit, sed diam nonummy nibh euismod
                                        tincidunt ut laoreet dolore magna aliquam erat
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit, sed diam nonummy nibh euismod
                                        tincidunt ut laoreet dolore magna aliquam erat</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-6 col-xl-6">
                                <div class="partner-right">
                                    <Image src={PartnersImg} alt="" />
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
