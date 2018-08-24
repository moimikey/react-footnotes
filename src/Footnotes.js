import * as React from 'react'
import walker from 'react-tree-walker'
import Footnote from './Footnote'

class Footnotes extends React.Component {
  constructor () {
    super()
    this._index = 0
    this._done = false
    this._footnotes = {}
    this.state = {
      footnotes: {},
      count: 0
    }
  }
  componentDidMount () {
    let i = 1
    walker(this.props.children({
      Footnote,
      getFootnotes: () => {
        return this.state.footnotes
      }
    }), this.visit)
      .then(() => { this._done = false })
      .catch(err => console.error(err))
  }
  visit = (el, instance) => {
    if (instance && instance instanceof Footnote) {
      this._index = this._index + 1
      this._footnotes[this._index] = instance.props
      this.setState({
        footnotes: this._footnotes
      })
    }
  }
  render () {
    const { children } = this.props
    return (
      <React.Fragment>
        {children ? children({
          Footnote,
          getFootnotes: () => {
            return this.state.footnotes
          }
        }) : null}
      </React.Fragment>
    )
  }
}

export {
  Footnotes
}
