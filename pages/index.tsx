import config from "../blog.config"
import Layout from '../components/page-layout'
import PostCard from '../components/post-card'
import { getAllPosts } from '../utils/blog-api'
import Link from "next/link"

const Blog = ({ posts, prevPosts, nextPosts }) => {
  const isLocal = process.env.NODE_ENV === "development"
  
  return (
    <Layout title="BK's Blog">
      <div className="">
        {/* <!-- Page header --> */}
        <h1 className="mb-1 text-4xl">Hi, I am BK</h1>
        {/* <!-- Page sub-header --> */}
        <p className="text-lg">Front-End Engineer @ BuildOn Technologies, located in HTX</p>
        
        <Link href="/about">
        {/* w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6  */}
          <a className="bg-red-500 hover:bg-red-400 text-white inline-flex align-center w-auto py-2 px-4 mt-4 mb-8 group hover:pr-2 border border-red-200 border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-500 focus:ring-gray-900 focus:outline-none transition-colors duration-200">
            <span className="text-md leading-7">Learn more</span>
            <svg className="h-8 ml-4 group-hover:ml-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </Link>

      </div>
      <h1 className="mb-8 text-4xl">Blog</h1>
      {
        posts && posts.filter((post) => {
          return isLocal || !post.draft
        })
        .map((post) => (
          <PostCard key={post.slug} post={post}/>
        ))
      }
      <div>
        <div>
          {prevPosts !== null && (
            <Link href={"/blog/" + prevPosts} passHref>
              <a>« see newer posts</a>
            </Link>
          )}
        </div>
        <div>
          {nextPosts !== null && (
            <Link href={"/blog/" + nextPosts} passHref>
              <a>see older posts »</a>
            </Link>
          )}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "thumbnail",
    "excerpt",
    "draft",
  ])

  const startIndex = 0
  const endIndex = config.postsPerPage
  const prevPosts = null
  const nextPosts = endIndex >= posts.length ? null : 2

  return {
    props: { posts: posts.slice(startIndex, endIndex), prevPosts, nextPosts },
  }
}

export default Blog
