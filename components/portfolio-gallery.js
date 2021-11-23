import Image from 'next/image'
import Mockup from '../images/mockup.png'
import Gate from '../images/gate.png'
import Vid from '../images/video-v.png'
import Pic from '../images/pics-v.png'
import Office from '../images/office.png'
import Couch from '../images/couch.png'
import Kit from '../images/kit.png'
import MblV from '../images/mbl-v.png'
import BanImg from '../images/banner-img.png'

import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
export default function PortfolioGallery() {
    return (
      <div className=''>
        <div>
            <div class="potfolio-gallery-wrap">
                <div class="gallery-wrap-inner custom-slideUp">
                    <div class="grid">
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column">

                            <div class="grid-item">
                                <div class="grid-item-inner" data-bs-toggle="modal" data-bs-target="#largeModal">    
                                    <Image src={Mockup} alt="" />
                                    <div class="img-content">
                                        <p>Modern Craftsman Website</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="grid-item" data-aos="fade-up" data-aos-duration="1500">
                                
                                <div class="grid-item-inner">    
                                <Image src={Gate} alt="" />
                                    <div class="img-content">
                                        <p>Modern Craftsman Website</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item" data-aos="fade-up" data-aos-duration="1500">
                                
                                <div class="grid-item-inner">    
                                <Image src={Vid} alt="" />
                                    <div class="img-content">
                                        <p>Modern Craftsman Website</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item" data-aos="fade-up" data-aos-duration="1500">
                                
                                <div class="grid-item-inner">    
                                <Image src={Pic} alt="" />
                                    <div class="img-content">
                                        <p>Modern Craftsman Website</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item" data-aos="fade-up" data-aos-duration="1500">
                                <div class="grid-item-inner">    
                                <Image src={Office} alt="" />
                                    <div class="img-content">
                                        <p>Modern Craftsman Website</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item" data-aos="fade-up" data-aos-duration="1500">
                                <div class="grid-item-inner">    
                                <Image src={Couch} alt="" />
                                    <div class="img-content">
                                        <p>Modern Craftsman Website</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item" data-aos="fade-up" data-aos-duration="1500">
                                
                                <div class="grid-item-inner">    
                                <Image src={Kit} alt="" />
                                    <div class="img-content">
                                        <p>Modern Craftsman Website</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item" data-aos="fade-up" data-aos-duration="1500">
                                
                                <div class="grid-item-inner">    
                                <Image src={MblV} alt="" />
                                    <div class="img-content">
                                        <p>Modern Craftsman Website</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item" data-aos="fade-up" data-aos-duration="1500">
                                <div class="grid-item-inner">    
                                <Image src={BanImg} alt="" />
                                    <div class="img-content">
                                        <p>Modern Craftsman Website</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-item" data-aos="fade-up" data-aos-duration="1500">
                                <div class="grid-item-inner">    
                                <Image src={BanImg} alt="" />
                                    <div class="img-content">
                                        <p>Modern Craftsman Website</p>
                                    </div>
                                </div>
                            </div>
                        </Masonry>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }

  