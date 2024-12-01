import { gql, request } from 'graphql-request'


// const {gql} = require("graphql-require")

const MASTER_URL=process.env.NEXT_PUBLIC_BACKEND_API_URL;


const GetCategory = async()=>{
  const query = gql`
  query MyQuery {
      categories(first: 30) {
        id
        name
        slug
        description
        icon {
          url
        }
      }
  }
  `
  const result = await request(MASTER_URL, query)
  return result
}

export default{
  GetCategory
}