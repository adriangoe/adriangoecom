import { OutboundLink } from 'gatsby-plugin-google-analytics'
import * as React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FiGithub, FiInstagram, FiMail } from 'react-icons/fi'
import * as styles from './Links.module.scss'

interface LinksProps {
	isProjects: boolean
}

export default class Links extends React.Component<LinksProps, {}> {
	public render() {
		const isProjects = this.props.isProjects || false;

		return (
			<React.Fragment>
		    <div className={styles.links}>
		    	{isProjects}
	        <OutboundLink href="mailto:info@adriangoe.com">
	          <FiMail /> Email
	        </OutboundLink>
	        <OutboundLink href="https://github.com/adriangoe">
	          <FiGithub /> GitHub
	        </OutboundLink>
	        <OutboundLink href="https://linkedin.com/in/adriangoe">
	          <FaLinkedin /> LinkedIn
	        </OutboundLink>
	        <OutboundLink href="https://www.instagram.com/adriangoe/">
	          <FiInstagram /> Instagram
	        </OutboundLink>
	      </div>
		  </React.Fragment>
		)
	}
}
