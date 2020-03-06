import React from 'react'

import Layout from '../modules/Layout'
import Head from '../components/Head'
import About from '../modules/About'
import MeetPartners from '../modules/MeetPartners'
import SearchPartner from '../modules/SearchPartner'

const IndexPage = () => (
  <Layout>
    <Head title='Home' />
    <About />
    <MeetPartners />
    <SearchPartner />
  </Layout>
)

export default IndexPage
