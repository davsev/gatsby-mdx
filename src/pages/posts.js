import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
// ...GatsbyImageSharpFluid
const PostsPage = ({ data }) => {
  const {allMdx:{nodes:posts}} = data

  return <Layout>
    <Hero />
    <Posts posts={posts} title="all posts" />
  </Layout>
}


export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
          author
          category
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
        id
      }
    }
  }
`
export default PostsPage
