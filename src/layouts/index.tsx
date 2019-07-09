import * as React from 'react'
import * as styles from './Index.module.scss'
import { graphql, StaticQuery, Link } from 'gatsby'

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
		render={data => (
			<div className={styles.Container}>
			    <Link to={'/'}>
			        {data.site.siteMetadata.name}
			    </Link>
			    <Link to={'/about'}>
			      	About
			    </Link>
				{ children }
			</div>
		)}
	/>
)

export default IndexLayout
