import React from 'react'
// type
import PostType from '@/types/PostOnListType'
//component
import DateText from '../atoms/text/DateText'
import CommImage from '../atoms/image/CommImage'
import Link from 'next/link'






const PostBox = ({ post }: {
    post: PostType
}) => {
  return ( 
    <div className='w-1/2 cursor-pointer'>       
        <div key={post.id} className=' border-1 border-(--color-divider-main) hover:border-(--color-secondary-main) rounded-lg'>
            <div className='hover:text-(--color-secondary-main)'>
                <Link href={`/post/${post.slug}`}>
                    <CommImage 
                        src={post.featuredImage.url} 
                        alt={post.title}
                    /> 
                    <div className='p-4'>
                        
                        <h1 className='font-bold pt-2'>{post.title}</h1>
                        <DateText>{post.date}</DateText>
                    </div>
                    </Link>

            </div>

        </div>
    </div> 
  )
}

export default PostBox