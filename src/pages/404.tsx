import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../layouts'
import * as styles from './404.module.scss'

export default () => (
  <Layout>
  <div className={styles.wrapper}>
  	<div className={styles.content}>
  	  <h1>Ooops</h1>
  	  <h2>You found the #404</h2>
  	  <Link to="/">Go Back Home</Link>
  	</div>
  </div>
  </Layout>
)
