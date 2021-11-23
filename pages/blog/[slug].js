import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SubHeader from '../../components/sub-header'
import marked from 'marked'
import Link from 'next/link'

export default function PostPage({
  frontmatter: { title, date, cover_image, author },
  slug,
  content,
}) {
  return (
    <>
      {/* <Link href='#' onClick={() => router.back()}>
        <a className='btn btn-back'>Go Back</a>
      </Link>
      <div className='card card-page'>
        <h1 className='post-title'>{title}</h1>
        <div className='post-date'>Posted on {date}</div>
        <img src={cover_image} alt='' />
        <div className='post-body'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div> */}

      <div>
        <SubHeader />

        <section>
            <div class="blog-detail-wrap custom-slideUp">
                <div class="blog-detail-blog-img">
                    <img src={cover_image} alt="" />
                </div>
                <div class="blog-detail-box">
                    <div class="blog-auth-info">
                        <p>Post by <span> {author}</span>  |   date: <span>{date}</span></p>
                    </div>
                    <div class="blog-detail-title">
                        <h3>{title}</h3>
                    </div>
                    <div class="blog-detail-desc">
                      {/* <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div> */}
                    </div>
                </div>
            </div>
        </section>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
