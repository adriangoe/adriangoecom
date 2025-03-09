import * as React from 'react'
import Layout from '../layouts'
import * as styles from './under-construction.module.scss'

export default class UnderConstructionPage extends React.Component<{}, {}> {
  public render() {
    return (
      <Layout>
        <div className={styles.container}>
          <h1 className={styles.title}>Under Construction</h1>
          <p className={styles.description}>We are currently working on this website. Please check back soon!</p>
        </div>
      </Layout>
    )
  }
}
