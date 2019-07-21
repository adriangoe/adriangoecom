import { Link } from 'gatsby'
import * as React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import * as styles from './Nav.module.scss'

export default class NavBar extends React.Component<{}, {}> {
	public render() {
		return (
			<React.Fragment>
		    <div className={styles.nav}>
	        <Link to="/"><FaArrowLeft />Home</Link>
	        <h1>Projects</h1>
	      </div>
		  </React.Fragment>
		)
	}
}
