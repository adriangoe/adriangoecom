import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa'
import Links from '../components/Links.tsx'
import NavBar from '../components/NavBar.tsx'
import Helmet from '../components/SEO'
import Layout from '../layouts'
import * as styles from './Work.module.scss'

interface ProjectPageProps {
  data: {
    allMarkdownRemark: {
    	edges: {
    		node: {
    			id: string;
    			excerpt: string;
    			frontmatter: {
    				title: string;
    				date: string;
    				url: string;
    				tags: string[];
    				github: string;
    			}
    		}
    	}
    }
  }
}

export const ProjectPageQuery = graphql`
  query ProjectPageQuery {
    allMarkdownRemark (
    sort: {order: DESC, fields: [frontmatter___date]}
      ) {
      edges {
        node {
          id
          excerpt(pruneLength:200)
          frontmatter {
            title
            url
            github
            tags
            date(locale: "en", formatString: "MMMM, YYYY")
          }
        }
      }
    }
  }
`

export default class ProjectPage extends React.Component<ProjectPageProps, {}> {
  public render() {
    const edges = this.props.data.allMarkdownRemark.edges

    return (
      <Layout>
        <Helmet title={'Projects | Adrian Goedeckemeyer'} />
        <div className={styles.content}>
	        <NavBar/>
        	<div className={styles.wrapper}>
						{edges.map(({ node }) => (
		          <div className={styles.project} key={node.id}>
	            	<p className={styles.time}>{node.frontmatter.date}</p>
	            	<h2><a className={styles.name} href={node.frontmatter.url}>{node.frontmatter.title}</a></h2>
	            	<p className={styles.description}>
	            		{node.excerpt}
	            	</p>
	            	<p className={styles.tech}>
	            		{node.frontmatter.tags.map((tag) => (
	            			<>
	            				<span className={styles.tag}>{tag}</span>{' '}
	            			</>
	            		))}
	            		{(node.frontmatter.github ?
									   (<a className={styles.github} href={node.frontmatter.github}>
			            			<FaGithub /> View Source
			            		</a>)
									   : ('')
									)}
	            	</p>
			            <a className={styles.arrow} href={node.frontmatter.url}>
			              <svg viewBox="0 0 174 174" fill="none" xmlns="http://www.w3.org/2000/svg">
			              	<path fill-rule="evenodd" clip-rule="evenodd" d="M87 166.75C42.9553 166.75 7.25 131.045 7.25 87C7.25 42.9553 42.9553 7.25 87 7.25C131.045 7.25 166.75 42.9553 166.75 87C166.75 131.045 131.045 166.75 87 166.75ZM87 152.25C123.037 152.25 152.25 123.037 152.25 87C152.25 50.9634 123.037 21.75 87 21.75C50.9634 21.75 21.75 50.9634 21.75 87C21.75 123.037 50.9634 152.25 87 152.25ZM63.127 121.127L101.5 82.7531V108.75H116V58H65.2505V72.5H91.2474L52.8739 110.873L63.127 121.127Z" fill="black"/>
			              </svg>
			            </a>
	          	</div>
		        ))}
	        </div>
          <Links />
        </div>
      </Layout>
    )
  }
}
