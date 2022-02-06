import React from "react"
import {Link, graphql} from "gatsby"

import Layout from "../components/layout"
import Image from "..components/image"
import SEO from "../components/seo"

const About = ({data})=>{
    const {name, company, address} = data.site.siteMetadata.contact;
    return (
        <Layout>
        <SEO title="Contact"/>
        <h1>Contact Us</h1>
        <p>Please send all inquries to: </p>
        <div>{company}</div>
        <div>{`C/O ${name}`}</div>
        <div>{address}</div>

        <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
            <Image />
        </div>
        <Link to="/">Home</Link>
    </Layout>
    )
}

export default Contact 

export const query = graphql`
    query{
        site{
            siteMetaData{
                contact{
                    name
                    company
                    address
                }
            }
        }
}
`