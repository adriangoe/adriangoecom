import * as React from 'react'
import Layout from '../layouts'

interface ErrorPageProps {}

export default class ErrorPage extends React.Component<ErrorPageProps, {}> {
	public render() {

		return (
			<Layout>
				<h1>OOOPS</h1>
			</Layout>
		)
	}
}
