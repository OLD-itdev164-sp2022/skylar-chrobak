import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout.js"
import Image from "../images/gatsby-icon.png"
import Seo from "../components/seo.js"

const About = ({data})=>{
    const {name, company} = data.site.siteMetadata.contact;
    return (
        <Layout>
            <Seo title="About" />
            <h1>About Us</h1>
            <p>{`${company} was started by ${name} in 2022`}</p>
            <p>{`At ${company} we make blogs!`}</p>

            <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
                <Image />
            </div>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default About

export const query= graphql`
    query{
        site{
            siteMetadata{
                contact{
                    name
                    company
                }
            }
        }
}
`
