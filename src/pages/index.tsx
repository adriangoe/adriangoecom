import * as React from 'react'
import { graphql } from 'gatsby'
import * as styles from '../layouts/Index.module.scss'
import Layout from '../layouts'

interface IndexPageProps {
	data: {
		site: {
			siteMetadata: {
				name: string;
				tagline: string;
			}
		}
	}
}

export const indexPageQuery = graphql`
	query IndexPageQuery {
		site {
			siteMetadata {
				name
				tagline
			}
		}
	}
`

export default class IndexPage extends React.Component<IndexPageProps, {}> {
	public render() {
		const {
			name,
			tagline
		} = this.props.data.site.siteMetadata

		return (
			<Layout>
				<h1>{name}</h1>
				<p>{tagline}</p>
			</Layout>
		)
	}
}
