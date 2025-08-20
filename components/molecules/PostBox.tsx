import React from 'react'
// type
import PostType from '@/types/PostType'






const PostBox = ({ post }: {
    post: PostType
}) => {
  return ( 
    <div>       
        <div key={post.id}>
            <div>
                    <img 
                        className='w-full h-56 object-cover'
                        src={post.featuredImage.url} /> {/* 詳細編で<Image />に変える */}
                    <div className='py-4'>
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