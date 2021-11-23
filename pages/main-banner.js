import Image from 'next/image'
import BannerImg from '../images/banner-img.png'

export default function Banner() {
  return (
    <div className=''>
      <div>
      <div class="home-banner">
            <div class="home-banner-inner" >
                <div class="banner-img">
                  <Image src={BannerImg} alt="Banner Image" />
                    <div class="banner-text">
                        <div class="banner-text-inner" data-aos="fade-up" data-aos-duration="1500">
                            <h1>Your Real Estate Marketing Partner</h1>
                            <div class="banner-buttons">
                                <a href=""data-bs-toggle="modal" data-bs-target="#pricingModal"  class="primary-button">Order Now</a>
                                <a href="contact-us.php" class="secondary-button">Let’s Chat</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="transparent-path"></div>
        </div>
      </div>
    </div>
  )
}
