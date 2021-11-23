import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'next/image'
import KitchenImg from '../images/kitchen.png'
import Room from '../images/room.png'
import Videos from '../images/videos.png'
import Home from '../images/banner-img.png'
import Pics from '../images/pics.png'
import Office from '../images/office.png'
import Skelton from '../images/skelton.png'
import Making from '../images/video-making.png'

export default function PastWork() {
    var Centersettings = {
        dots: false,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        margin:20,
    };
    var Normalsettings = {
        dots: false,
        infinite: true,
        centerMode: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        margin:20,
    };
  return (
    <div className=''>
      <div>
            <section>
                <div class="past-work-wrap">
                    <div class="past-work-filters">
                        
                        <div class="title">
                            <h4>Past Work</h4>
                        </div>
                        <div class="filter-buttons">
                            <a href="" class="primary-button" data-bs-toggle="modal" data-bs-target="#pricingModal">View Pricing</a>
                            <a href="portfolio.php" class="secondary-button">View Portfolio</a>
                        </div>
                        
                        <div class="line"></div>
                    </div>
                    <div class="portfolio-gallery">
                        <div class="portfolio-gallery-inner" data-aos="fade-right" data-aos-duration="1500">
                            <Slider class="past-portfolio" {...Centersettings}>
                                <div class="portfolio-img"><Image src={KitchenImg} /></div>
                                <div class="portfolio-img"><Image src={Home} /></div>
                                <div class="portfolio-img"><Image src={Videos} /></div>
                                <div class="portfolio-img"><Image src={KitchenImg} /></div>
                                <div class="portfolio-img"><Image src={Room} /></div>
                                <div class="portfolio-img"><Image src={Home} /></div>
                            </Slider>
                            <Slider class="past-portfolio" {...Normalsettings}>
                                <div class="portfolio-img"><Image src={Pics} /></div>
                                <div class="portfolio-img"><Image src={Making} /></div>
                                <div class="portfolio-img"><Image src={Skelton} /></div>
                                <div class="portfolio-img"><Image src={Home} /></div>
                                <div class="portfolio-img"><Image src={Office} /></div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
      </div>
    </div>
  )
}
