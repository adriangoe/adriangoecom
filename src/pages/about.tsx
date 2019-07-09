import * as React from 'react'
import { graphql } from 'gatsby'
import * as styles from '../layouts/Index.module.scss'
import Layout from '../layouts'

interface AboutPageProps {
	data: {
		site: {
			siteMetadata: {
				name: string;
				tagline: string;
			}
		}
	}
}

export const aboutPageQuery = graphql`
	query AboutPageQuery {
		site {
			siteMetadata {
				name
				tagline
			}
		}
	}
`

export default class AboutPage extends React.Component<AboutPageProps, {}> {
	public render() {
		const {
			name,
			tagline
		} = this.props.data.site.siteMetadata

		return (
			<Layout>
				<h1>About - {name}</h1>
				<p>Learn More here.</p>
			</Layout>
		)
	}
}
