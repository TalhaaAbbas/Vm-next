import Image from 'next/image'
import TabImgAdvance from '../images/tab-img2.png'
import TabImgVideo from '../images/tab-img.png'

export default function HelpServiceDetail() {
  return (

    <div class="col-md-8 col-lg-8 col-xl-8 p-0">
        <div class="tab-pane-section" data-aos="fade-up" data-aos-duration="1500">
            <div class="tab-item-detail-wrap">
                <div class="title">
                    <h3>Turnaround Time</h3>
                </div>
                <div class="info-wrap">
                    <div class="heading">
                        <h6>Our Policy</h6>
                    </div>
                    <div class="detail">
                        <p>Lorem ipsum dolor sit amet, consec tetuer adipiscing elit, sed diam nibh
                        euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. ipsum
                        dolor sit amet, consec tetuer adipiscing elit, sed diam nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Aenean
                        faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
                        vitae risus tristique posuere.</p>
                    </div>
                    <div class="info-img">
                        <Image src={TabImgVideo} alt="" />
                    </div>
                    <div class="detail">
                        <p>Lorem ipsum dolor sit amet, consec tetuer adipiscing elit, sed diam nibh
                        euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. ipsum
                        dolor sit amet, consec tetuer adipiscing elit, sed diam nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat. Aenean
                        faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem
                        vitae risus tristique posuere.</p>
                    </div>
                    <div class="info-img">
                        <Image src={TabImgAdvance} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

