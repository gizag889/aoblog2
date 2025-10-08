import axios from "axios";

const repository = axios.create({
    baseURL: process.env.NEXT_PUBLIC_WP_ENDPOINT,
    headers: {
        'Content-Type': 'application/json'
    }
})

const Repository = (query: string, { variables }: Record<string, any> = {}) => {
    const body = {
        query,
        variables
    }
    return {
        getWp() {
            return repository.post('/', body)
        }
    }
}

export default Repository

// GraphQL クエリの例
// const postsQuery = `
//   query GetPosts($first: Int!) {
//     posts(first: $first) {
//       nodes {
//         id
//         title
//         content
//       }
//     }
//   }
// `

// // Repository を使用
// const postsRepo = Repository(postsQuery, { variables: { first: 10 } })
// postsRepo.getWp()  // WordPress から投稿データを取得