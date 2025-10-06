import type { NextPage } from 'next'
// type
import PostOnListType from '../types/PostOnListType'
// service
import PostService from '../services/PostService'
// hooks
import usePostListSwr from '../hooks/swr/usePostListSwr'
// component
import Layout from '@/components/templates/Layout'
import PostBox from '@/components/molecules/PostBox'
import AboutBox from '@/components/molecules/AboutBox'



const Home: NextPage<{
  staticPostList: PostOnListType[]
}> = ({ staticPostList }) => {
  const postList = usePostListSwr({ staticPostList })

  
  return (
    <Layout>
      <div className=' pt-6 mx-auto lg:max-w-screen-lg'>
        <div className='flex gap-10 items-start'>
            <div className='grid grid-cols-2 gap-4'>
              {postList!.map((post) => {
                  return (
                    <PostBox post={post} />
                    
                  )
                })}   
            </div>
            <AboutBox></AboutBox>
        </div>
    </div>
  </Layout>

         
  )
}

export async function getStaticProps() {
  const staticPostList = await PostService.getList({});
  return {
    props: {
      staticPostList: staticPostList
    },
    revalidate: 10
  }
}

export default Home