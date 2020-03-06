import React from 'react'

import Layout from '../modules/Layout'
import Seo from '../components/Seo'
import About from '../modules/About'
import MeetPartners from '../modules/MeetPartners'
import SearchPartner from '../modules/SearchPartner'

const IndexPage = () => (
  <Layout>
    <Seo title='Home' />
    <About />
    <MeetPartners />
    <SearchPartner />
  </Layout>
)

export default IndexPage
