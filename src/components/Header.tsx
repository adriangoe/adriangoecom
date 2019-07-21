import * as React from 'react'
import * as styles from './Header.module.scss'

const WAIT: number = 700;

export default class Header extends React.Component<{}, {}> {
  public state = {
    class: '',
    current: 'a',
    lang: '',
  };

  public render() {
    return (
      <React.Fragment>
      <div className={styles.container}>
        <div className={styles.bg} />
        <h1 className={(this.state.current === 'a' ? (styles.german) : (''))}>
          H<span className={this.state.class}>{this.state.current}</span>llo<svg id={styles.mark} viewBox="0 0 3 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.3 7.764C0.5 7.964 0.748 8.064 1.044 8.064C1.332 8.064 1.576 7.964 1.776 7.764C1.976 7.564 2.076 7.32 2.076 7.032C2.076 6.752 1.976 6.512 1.776 6.312C1.576 6.104 1.332 6 1.044 6C0.748 6 0.5 6.104 0.3 6.312C0.1 6.512 0 6.752 0 7.032C0 7.32 0.1 7.564 0.3 7.764Z" fill="black"/>
            <path className={styles.dot} d="M1.73418 0.278423C1.55696 0.0928076 1.31224 0 1 0C0.687764 0 0.443038 0.0928076 0.265823 0.278423C0.0886076 0.456304 0 0.692189 0 0.986079C0 1.2413 0.0675105 1.62413 0.202532 2.13457C0.337553 2.63728 0.472574 3.18639 0.607595 3.7819L0.873418 5H1.11392L1.37975 3.7819C1.52321 3.17092 1.66245 2.61408 1.79747 2.11137C1.93249 1.60093 2 1.22583 2 0.986079C2 0.692189 1.91139 0.456304 1.73418 0.278423Z" fill="black"/>
          </svg>
        </h1>
      </div>
      </React.Fragment>
    )
  }

  public componentDidMount () {
    this.switchLetter();
  }

  private switchLetter() {
    if (this.state.current === 'e') {
      this.setState({current: 'a'})
      this.setState({current: 'a'})
    } else {
      this.setState({current: 'e'})
    }
    this.setState({class: ''})
    setTimeout(() => {
      this.setState({class: styles.blink})
      setTimeout(() => {
        this.setState({class: ''})
        setTimeout(() => {
          this.setState({class: styles.blink})
          setTimeout(() => { this.switchLetter() }, WAIT);
        }, WAIT);
      }, WAIT);
    }, WAIT);
  }
}
