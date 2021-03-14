import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

// ...GatsbyImageSharpFluid
const IndexPage = ({data}) => {
  const {allMdx:{nodes:posts} } = data
  // console.log('posts', posts)
  return <Layout>
    <Hero showPerson={true}/>
    <Posts posts={posts} title="last posts"/>
 
  </Layout>
}

export const query = graphql`
  {
    allMdx(limit: 3, sort: {fields: frontmatter___date, order: DESC}) {
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
export default IndexPage
