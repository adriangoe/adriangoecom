import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'
import Header from '../components/Header.tsx'
import Links from '../components/Links.tsx'
import Helmet from '../components/SEO'
import Layout from '../layouts'
import * as styles from './Index.module.scss'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
      }
    }
    file: {
      childImageSharp: Img;
    }
  }
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
      }
    }
    file(relativePath: {eq: "adrian.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100, traceSVG: { color: "#000000" }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    const {
      name,
    } = this.props.data.site.siteMetadata
    const headshot = this.props.data.file.childImageSharp

    return (
      <Layout>
        <Helmet title={name} />
        <Header />
        <div className={styles.content}>
            <h2>This website is under construction <i class="fa-solid fa-wrench"></i></h2>
        </div>
      </Layout>
    )
  }
}
