import { graphql, Link, StaticQuery} from 'gatsby'
import * as React from 'react'
import logo from '../../static/favicon.png'
import Footer from '../components/Footer.tsx'
import NavBar from '../components/NavBar.tsx'
import * as styles from './Index.module.scss'

const IndexLayout: React.SFC = ({ children }) => (
	<StaticQuery
		query={graphql`
			query {
				site {
					siteMetadata {
						name
					}
				}
			}
		`}
		// tslint:disable-next-line jsx-no-lambda
		render={data => (
			<div className={styles.wrapper}>
			<React.Fragment>
				{ children }
				<Footer />
			</React.Fragment>
			</div>
		)}
	/>
)

export default IndexLayout
