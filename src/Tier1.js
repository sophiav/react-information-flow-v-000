import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'

export default class Tier1 extends Component {
  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  handleClick = () => {
    const newColor = getRandomColor();
    this.setState({
      color: newColor,
      childColor: getReducedColor(newColor)
    })
  }

  handleChildClick = (e) => {
    e.stopPropagation();

    this.setState({
      childColor: getRandomColor()
    })
  }

  render() {
    const tier2Color = this.state.childColor;
    return (
      <div onClick={this.handleClick} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={tier2Color} onClick={this.handleChildClick} />
        <Tier2 color={tier2Color} onClick={this.handleChildClick} />
      </div>
    )
  }
}
