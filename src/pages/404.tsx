import * as React from 'react'
import Layout from '../layouts'
import * as styles from './404.module.scss'

export default () => (
  <Layout>
  <div className={styles.container}>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.description}>Sorry, the page you are looking for does not exist.</p>
  </div>
  </Layout>
)
