import React from 'react'

import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Não encontrado' />
    <h1>Não encontrado</h1>
    <p>Ops, parece que essa página não existe!</p>
  </Layout>
)

export default NotFoundPage
