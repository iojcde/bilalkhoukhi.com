import config from "../blog.config"
import Layout from '../components/page-layout'
import PostCard from '../components/post-card'
import { getAllPosts } from '../utils/blog-api'
import Link from "next/link"

const Blog = ({ posts, prevPosts, nextPosts }) => {
  const isLocal = process.env.NODE_ENV === "development"
  
  return (
    <Layout title="BK's Blog">
        <h1 className="mb-8 text-4xl">Blog</h1>
        {posts &&
        posts
          .filter((post) => {
            return isLocal || !post.draft
          })
          .map((post) => (
            <PostCard key={post.slug} post={post}/>
          ))}
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
