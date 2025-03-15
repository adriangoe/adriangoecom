import * as React from 'react'
import * as styles from './Footer.module.scss'

export default class Footer extends React.Component<{}, {}> {
  public render() {
    return (
      <React.Fragment>
      <div className={styles.footer}>
        © Adrian Goedeckemeyer, 2024{' '}
        <a href="/impressum">Impressum</a>
      </div>
      </React.Fragment>
    )
  }

  public componentDidMount () {
  }
}
