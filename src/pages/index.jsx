import React from "react"

import Layout from "../components/Layout.jsx"
import Image from "../components/Image.jsx"
import SEO from "../components/Seo.jsx"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image imageName="gatsby-astronaut.png" />
    </div>
  </Layout>
)

export default IndexPage
