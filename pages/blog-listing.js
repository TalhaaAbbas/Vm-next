import Blog from './blog';
import Image from 'next/image';
import SignupBox from './signup-box';
import fs from 'fs';
import matter from 'gray-matter'
import path from 'path';
import BlogImg from '../images/skelton.png';
import Link from 'next/dist/client/link';
// import blogData from './blog-data'

// export const getStaticProps = async () => {
//     return {
//         props: {
//             blogData: blog-data,
//         },
//     }
// }

export default function BlogListing({posts}) {


    // console.log(posts)

    // const post = ['one', 'two', 'three', 'four'];
    // const isBlog = this.state.isBlog;
    return (
      <div className=''>
        <div>
        <div class="theme-subheader">
            <div class="subhead-inner">
                <div class="subhead-title">
                    <h2>The Blog</h2> {/*{isBlog ? 'currently' : 'not'}*/}
                </div>
                <div class="subhead-filters">
                    <div class="select-wrap">
                        <label>SORT BY :</label>
                        <select name="color">
                            <option value="yellow">Recent</option>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                        </select>
                    </div>
                    <div class="select-wrap">
                        <label class="filter-icon"><i class="fa fa-filter"></i></label>
                        <select name="color">
                            <option value="yellow">Filters</option>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                        </select>
                    </div>
                </div>
            </div>
            </div>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}
            <section>
                <div class="blog-listing-wrapper" >
                    <div class="blog-listing-inner">
                        <div class="row">
                        {/* {posts.map((post) => (
                            {post}
                        ))} */}
                            {/* {blogs} */}
      
                                {posts.map((post, index) =>(
                                    <Blog post={post}/>
                                ))}
                            <SignupBox></SignupBox>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </div>

    )
}


export async function getStaticProps(){
    // get files from the post dir 
    const files = fs.readdirSync(path.join('posts')) 
    // Get slug and front matter 
    const posts = files.map( (filename) => {
        // create slug 
        const slug = filename.replace('.md', '')

        // get frontmatter 
        const markDownWithMeta = fs.readFileSync(path.join('posts',
        filename), 'utf-8')
        
        const { data:frontmatter } = matter (markDownWithMeta)

        return{
            slug,
            frontmatter
        }
    })
    console.log(posts)
    return{
        props:{
            posts
        },
    }
}

  