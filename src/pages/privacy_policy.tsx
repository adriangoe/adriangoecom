import * as React from 'react'
import Layout from '../layouts'
import Helmet from '../components/SEO'
import * as styles from '../pages/Index.module.scss'

const PrivacyPolicyPage = () => (
  <Layout>
    <Helmet title='PrivacyPolicy' />
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <h2>Privacy Policy for Qiqi and Adrian's Wedding RSVP</h2>
        <p>(Don't worry, it's short!)</p>
        <p>Hey there! We're just trying to tie the knot, not tie you up in red tape. But we take your personal data and EU Data Legislation seriously, so here's the scoop on your info:</p>
        <p><strong>What we're collecting:</strong> Your name(s), any dietary needs (so we don't have a hanger situation), and if you're joining the party.</p>
        <p><strong>Why?</strong> To plan the wedding, obviously! We need to know who's coming to make sure we have enough cake. </p>
        <p><strong>We won't spill your secrets:</strong> We'll only share your info with the caterer (for food stuff) and the venue (for seating).</p>
        <p><strong>We'll keep it safe:</strong> Your data is locked up tighter than a jar of pickles. </p>
        <p><strong>You're in control:</strong> You can ask us to see, change, or delete your info anytime. Just email us at: <a href="mailto:qiqiandadrian@gmail.com">qiqiandadrian@gmail.com</a></p>
        <p><strong>We'll delete it later:</strong> Once the honeymoon's over, we'll delete your data.</p>
        <p><strong>Legal stuff:</strong> By checking the box, you're saying "I do" to us using your info for wedding planning.</p>
      </div>
    </div>
  </Layout>
)

export default PrivacyPolicyPage
