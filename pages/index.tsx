import type { NextPage } from 'next'
import PostService from '../services/PostService'
import PostType from '@/types/PostType'
import usePostListSwr from '@/hooks/swr/usePostListSwr'


const Home: NextPage<{
  staticPostList: PostType[] // 型の指定をする場所に注意！
}> = ({ staticPostList }) => {
  const postList = usePostListSwr(staticPostList)
  //useSWRは二重チェックの役割
  return (
    <div>
      {postList?.map((post) => {
        //このmapでusePostListSwrで渡した書き換えたGraphQlツリーが反映される
        
        return <p key={post.id}>{post.title}</p> // 一個ずつ表示させる
      })}
    </div>
  )
}

export async function getStaticProps() {
  const staticPostList = await PostService.getList(); // postListをとってくる
  return {
    props: {
      staticPostList
    }
  }
}

export default Home