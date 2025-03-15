import * as React from 'react'
import * as styles from './Footer.module.scss'

export default class Footer extends React.Component<{}, {}> {
  public render() {
    return (
      <React.Fragment>
      <div className={styles.footer}>
        <p>© Adrian Goedeckemeyer, 2025 <a href="/impressum">Impressum</a></p>
      </div>
      </React.Fragment>
    )
  }

  public componentDidMount () {
  }
}
