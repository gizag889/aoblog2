import type { NextPage } from 'next'
// type
import PostType from '../types/PostType'
// service
import PostService from '../services/PostService'
// hooks
import usePostListSwr from '../hooks/swr/usePostListSwr'
// component
import PostBox from '@/components/molecules/PostBox'
import Layout from '@/components/templetes/Layout'

import { Grid } from '@mui/material'
import {Container} from '@mui/material'


const Home: NextPage<{
  staticPostList: PostType[]
}> = ({ staticPostList }) => {
  const postList = usePostListSwr(staticPostList)
  return (
    <Layout>
          <div className=' pt-6 mx-auto lg:max-w-screen-lg'>
            <div className='flex gap-6  justify-start'>
               {postList!.map((post) => {
                  return (
                    <PostBox post={post} />
                  )
                })}   
            </div>
          </div>
      </Layout>
  )
}

export async function getStaticProps() {
  const staticPostList = await PostService.getList();
  return {
    props: {
      staticPostList: staticPostList
    },
    revalidate: 10
  }
}

export default Home