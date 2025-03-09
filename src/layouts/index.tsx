import * as React from 'react'
import * as styles from './Index.module.scss'

const IndexLayout: React.SFC = ({ children }) => (
	<div className={styles.wrapper}>
			<React.Fragment>
				{ children }
			</React.Fragment>
	</div>
)

export default IndexLayout
