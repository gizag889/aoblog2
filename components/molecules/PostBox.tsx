import React from 'react'
// type
import PostType from '@/types/PostType'
//component
import DateText from '../atoms/Text/DateText'






const PostBox = ({ post }: {
    post: PostType
}) => {
  return ( 
    <div className='w-1/2 cursor-pointer '>       
        <div key={post.id} className=' border-1 border-(--color-divider-main) hover:border-(--color-secondary-main) rounded-lg'>
            <div className='hover:text-(--color-secondary-main)'>
                    <img 
                        className='w-full h-56 object-cover rounded-t-lg'
                        src={post.featuredImage.url} /> {/* 詳細編で<Image />に変える */}
                    <div className='p-4 '>
                        <span >{post.category.name}</span>
                        <h1 className='font-bold pt-2'>{post.title}</h1>
                        <DateText>{post.date}</DateText>
                    </div>
                    
            </div>
        </div>
    </div> 
  )
}

export default PostBox