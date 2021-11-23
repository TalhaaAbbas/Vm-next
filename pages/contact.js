import Image from 'next/image'
import ContactFormImg from '../images/contact.png'
import ContactForm from './contact-form'
export default function HelpCenterDetail() {
  return (
    <div className="">
        <section>
            <div class="contact-page-wrapper">
                <div class="contact-wrap-inner">
                    <div class="row">
                        <div class="col-md-5 col-lg-5 col-xl-5 p-0">
                            <div class="contact-img">
                                <Image src={ContactFormImg} alt="" />
                            </div>
                        </div>
                        <div class="col-md-7 col-lg-7 col-xl-7 p-0">
                            <ContactForm></ContactForm>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

