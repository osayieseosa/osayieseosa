// app/page.tsx
import Link from 'next/link'
import {HiPencil} from 'react-icons/hi'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

function PostCard(post: Post) {
  return (
    <div className="mb-8 p-5 border-b-[1px] border-neutral-500">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </div>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (

    <div className="mx-auto max-w-xl py-8">
<h1 className='text-3xl max-w-xl mx-auto px-5 font-semibold pb-10 flex gap-3 text-gray-500'><HiPencil className='text-gray-700'/>MY BLOGS</h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}