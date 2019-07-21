import * as React from 'react'
import * as styles from './Footer.module.scss'

export default class Footer extends React.Component<{}, {}> {
  public render() {
    return (
      <React.Fragment>
      <div className={styles.footer}>
        © Adrian Goedeckemeyer, 2019{' '}
        <a href="https://www.iubenda.com/privacy-policy/8161934" className="iubenda-black iubenda-embed" title="Privacy Policy">
          Privacy Policy
        </a>
      </div>
      </React.Fragment>
    )
  }

  public componentDidMount () {
    this.iubenda(window, document);
  }

  private iubenda(w, d) {
    const s = d.createElement('script');
    const tag = d.getElementsByTagName('script')[0];

    s.src = 'https://cdn.iubenda.com/iubenda.js';
    tag.parentNode.insertBefore(s, tag);
  }
}
