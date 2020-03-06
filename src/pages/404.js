import React from 'react'

import Layout from '../modules/Layout'
import Head from '../components/Head'

const NotFoundPage = () => (
  <Layout>
    <Head title='404: Não encontrado' />
    <h1>Não encontrado</h1>
    <p>Ops, parece que essa página não existe!</p>
  </Layout>
)

export default NotFoundPage
