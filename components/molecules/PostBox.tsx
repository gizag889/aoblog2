import React from 'react'
// type
import PostType from '@/types/PostType'






const PostBox = ({ post }: {
    post: PostType
}) => {
  return ( 
    <div className='w-1/2'>       
        <div key={post.id} className='border-1 border-(--color-divider-main) rounded-lg'>
            <div >
                    <img 
                        className='w-full h-56 object-cover rounded-t-lg'
                        src={post.featuredImage.url} /> {/* 詳細編で<Image />に変える */}
                    <div className='p-4'>
                        <span>{post.category.name}</span>
                        <h1 className='font-bold'>{post.title}</h1>
                        <div dangerouslySetInnerHTML={{__html: post.excerpt}}></div> 
                        <span>{post.date}</span>
                    </div>
                    
            </div>
        </div>
    </div> 
  )
}

export default PostBox