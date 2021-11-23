import Image from 'next/image';
import BlogImg from '../images/testimonial.png';
import Link from 'next/dist/client/link';

export default function Blog({post}) {
    // console.log(posts)
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()
    return (
            <div class="col-md-6 col-lg-4 col-xl-4">
                <div class="blog-item" data-aos="fade-up" data-aos-duration="1500">
                    <div class="blog-img">
                        <img src={post.frontmatter.cover_Img} alt=""/>
                    </div>
                    <div class="blog-info">
                        <div class="blog-category">
                            <p>{post.frontmatter.tag}</p>
                        </div>
                        <div class="blog-title">
                            <h3>
                                <Link href={`/blog/${post.slug}`}>
                                    <a>{post.frontmatter.title}</a>
                                </Link>
                            </h3>
                        
                        </div>
                        <div class="blog-short-desc">
                            <p>{post.frontmatter.short_detail}</p>
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
  


// import Link from 'next/link'

// export default function Post({ post }) {
//   return (
//     <div className='card'>
//       <img src={post.frontmatter.cover_image} alt='' />

//       <div className='post-date'>Posted on {post.frontmatter.date}</div>

//       <h3>{post.frontmatter.title}</h3>

//       <p>{post.frontmatter.excerpt}</p>

//       <Link href={`/blog/${post.slug}`}>
//         <a className='btn'>Read More</a>
//       </Link>
//     </div>
//   )
// }