import Image from 'next/image';
import BlogImg from '../images/skelton.png';
import Link from 'next/dist/client/link';
export default function Blog() {
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()
    return (
        <div class="col-md-6 col-lg-4 col-xl-4">
            <div class="blog-item" data-aos="fade-up" data-aos-duration="1500">
                <div class="blog-img">
                    <Image src={BlogImg} alt=""/> 
                </div>
                <div class="blog-info">
                    <div class="blog-category">
                        <p>Work</p>
                    </div>
                    <div class="blog-title">
                        <h3>
                            <Link href="/blog-detail">
                                <a>Sample Text Here</a>
                            </Link>
                        </h3>
                    </div>
                    <div class="blog-short-desc">
                        <p>Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit, sed diam nonummy nibh
                            euismod tincidunt ut laoreet dolore.</p>
                    </div>
                    <div class="blog-tags">
                        <div class="tag">
                            <p>Video</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  