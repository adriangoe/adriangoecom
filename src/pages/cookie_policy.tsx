import * as React from 'react'
import Layout from '../layouts'
import Helmet from '../components/SEO'
import * as styles from '../pages/Index.module.scss'

const CookiePolicyPage = () => (
  <Layout>
    <Helmet title='CookiePolicy' />
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <h2>Cookie Policy for <a href="https://qiqiand.adriangoe.com">qiqiand.adriangoe.com</a></h2>
        <h3>Yeah, We Use 'Em. So What? (But We'll Explain)</h3>
        <p>Look, we're not gonna lie. We use cookies. Because, like, how else are we supposed to know if anyone's actually looking at our wedding website? We're not mind readers (though that would be handy for seating arrangements).</p><h3>What are these "cookies" anyway?</h3><p>They're basically tiny digital crumbs your browser leaves behind. Harmless, we promise. Think of them as breadcrumbs leading you back to the cake (or, you know, our wedding details).</p><h3>Why we're being so nosy (with Google Analytics)</h3><p>We're using Google Analytics because we're curious! We want to see:</p><ul>
          <li>Which pages are the most popular (so we know where to put the good photos).</li>
          <li>How many people are actually checking out the RSVP page (because we need a headcount!).</li>
          <li>Generally, just to see if anyone's out there. Like, is this website even working?</li>
        </ul>
        <h3>The cookies we use (the boring tech stuff)</h3>
          <p>Google Analytics cookies: They spy on… I mean, gather data about… how you use our site. Don't worry, they're not judging your dance moves.</p>
        <h3>You're the boss (cookie control)</h3><p>You can tell your browser to ignore these digital crumbs if you want. We won't take it personally. Just go to your browser settings and do your thing.</p><h3>Want more details? (Fine, here's a link)</h3><p>For the full, unedited, super-technical explanation, check out <a href="https://www.allaboutcookies.org/">https://www.allaboutcookies.org/</a></p>
        <h3>Questions? (We're here to help)</h3><p>If you have any cookie-related existential crises, email us at: <a href="mailto:qiqiandadrian@gmail.com">qiqiandadrian@gmail.com</a></p>
      </div>
    </div>
  </Layout>
)

export default CookiePolicyPage
