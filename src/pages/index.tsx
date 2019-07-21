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
          <Img className={styles.headshot}
               fluid={headshot.fluid}
               alt={name} />
          <div className={styles.wrapper}>
            <h2>I'm {name},</h2>
            <p>a Software Engineer at <a href="https://www.youtube.com">YouTube</a>, passionate about using Machine Learning for Music and Social Impact. I'm also an Inaugural Graduate at the <a href="https://www.minerva.kgi.edu">Minerva Schools at KGI</a>.</p>
            <p>Check out some of my recent work <Link to="/work">here</Link>.</p>
            <p>
              Besides code, I also like to take <a href="https://photos.adriangoe.com">pictures</a>!
            </p>
          </div>
          <Links />
        </div>
      </Layout>
    )
  }
}
