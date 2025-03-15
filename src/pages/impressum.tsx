import * as React from 'react'
import Layout from '../layouts'
import Helmet from '../components/SEO'
import * as styles from '../pages/Index.module.scss'

const ImpressumPage = () => (
  <Layout>
    <Helmet title='Impressum' />
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <h2>Impressum for <a href="https://qiqiand.adriangoe.com">qiqiand.adriangoe.com</a></h2>
        <p>(Because Apparently in Germany We Need One...)</p>
        <p>Okay, fine, here's the official stuff. We're just trying to throw a party, not run a corporation, but rules are rules.</p>

        <h3>Who's Responsible for This Website?</h3>
        <p>Adrian Goedeckemeyer<br />
        Kopernikusstr. 25c, 10245 Berlin, Germany</p>

        <h3>How to Reach Us (When You're Not Busy RSVPing):</h3>
        <p>Email: <a href='mailto:qiqiandadrian@gmail.com'>qiqiandadrian@gmail.com</a><br />
        (We're mostly email people, because who answers phone calls anymore?)</p>

        <h3>What Else Do You Need to Know?</h3>
        <p>Honestly, not much. We're just trying to get married. This website is just for wedding info and RSVPs. We promise we're not secretly selling your data to lizard people (probably).</p>

        <h3>Disclaimer (Because Lawyers):</h3>
        <p>We're doing our best here. If something goes wrong, please don't sue us. We're just two people in love, not legal experts.</p>

        <p>(P.S. If you find any typos, please don't tell us. We're already stressed enough.)</p>
      </div>
    </div>
  </Layout>
)

export default ImpressumPage
