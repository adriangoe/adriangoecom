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
