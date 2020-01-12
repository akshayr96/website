import React from "react"

import Layout from "../components/Layout.jsx"
import Banner from "../components/Banner.jsx"
import WorkExperience from '../components/WorkExperience.jsx'
import Education from "../components/Education.jsx"
import Clients from "../components/Clients.jsx"
import SEO from "../components/Seo.jsx"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <WorkExperience />
    <Education />
    <Clients />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
