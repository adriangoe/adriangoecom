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
        <div id="wcb" className="wcb wcb-d carbonbadge"/>
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

    const s2 = d.createElement('script');
    const tag2 = d.getElementsByTagName('script')[0];

    s2.src = 'https://unpkg.com/website-carbon-badges@^1/b.min.js';
    tag2.parentNode.insertBefore(s2, tag2);
  }
}
