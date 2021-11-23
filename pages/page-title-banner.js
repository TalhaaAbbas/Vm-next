import Image from 'next/image';
// import bg from '../images/g-banner.svg';
var BannerBackground = '../images/g-banner.svg';
const styling = {
    backgroundImage: `url('${BannerBackground}')`,
    width:"100%",
    height:"100%"
}
export default function PageBanner() {
    return (
      <div className=''>
        <div>
            <section>
                <div class="standard-banner" style={ styling } >
                    {/*  */}
                    <div class="st-banner-inner">
                        <div class="st-banner-content-wrap" data-aos="fade-up" data-aos-duration="1500">
                            <div class="st-content-inner">
                                <div class="st-content">
                                    <span>Our Services</span>
                                    <h1>Videography</h1>
                                </div>
                                <div class="st-buttons">
                                    <a href="" class="primary-button" data-bs-toggle="modal" data-bs-target="#pricingModal">View Pricing</a>
                                    <a href="portfolio.php" class="secondary-button">View Portfolio</a>
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
  