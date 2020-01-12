import React from "react"
import Layout from "../components/Layout.jsx"
import Banner from "../components/Banner.jsx"
// import Skills from "../components/Skills.jsx"
import WorkExperience from '../components/WorkExperience.jsx'
import Education from "../components/Education.jsx"
import Clients from "../components/Clients.jsx"
import Footer from "../components/Footer.jsx"
import SEO from "../components/Seo.jsx"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    {/* <Skills /> */}
    <WorkExperience />
    <Education />
    <Clients />
    <Footer />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
