import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout.js";
import Seo from "../components/seo.js";

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <ul>
      {
        data.allContentfulBlogPost.edges.map(edge =>(
          <li>
            <Link to={edge.node.slug} key={edge.node.id}>{edge.node.title}</Link>
            <div>
              <GatsbyImage
                image={edge.node.heroImage.gatsbyImageData}
                alt="test"
                />
            </div>
            <div>
              {edge.node.body.childMarkdownRemark.excerpt}
            </div>
          </li>
        ))
      }
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
{
  allContentfulBlogPost {
    edges {
      node {
        body {
          childMarkdownRemark {
            excerpt
          }
        }
        heroImage {
          gatsbyImageData(
            width: 300, 
            layout: CONSTRAINED, 
            placeholder: BLURRED)
        }
      }
    }
  }
}
`
