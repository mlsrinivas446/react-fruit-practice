import './index.css'

import {Component} from 'react'

class FruitCounter extends Component {
  state = {mango: 0, banana: 0}

  eatMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="counter-container">
        <div className="counter-card-container">
          <h1 className="count-heading">
            Bob ate <span className="count-value">{mango}</span> Mangoes
            <span className="count-value"> {banana}</span> bananas
          </h1>
          <div className="fruit-card-container">
            <div className="card-fruit1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-img"
              />
              <buttuon className="button" onClick={this.eatMango}>
                Eat Mango
              </buttuon>
            </div>
            <div className="card-fruit2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-img"
              />
              <buttuon className="button" onClick={this.eatBanana}>
                Eat Banana
              </buttuon>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitCounter
