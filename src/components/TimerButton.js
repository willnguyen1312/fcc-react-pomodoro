import React, { Component } from 'react'
import * as timerStates from '../constants'

class TimerButton extends Component {
  getButton = () => {
    if (this.props.timerState === timerStates.NOT_SET) {
      return (
        <button className="btn btn-success center-block" onClick={this.props.startTimer}>
          Start
        </button>
      )
    }

    if (this.props.timerState === timerStates.RUNNING) {
      return (
        <button className="btn btn-danger center-block" onClick={this.props.stopTimer}>
          Interrupt
        </button>
      )
    }

    if (this.props.timerState === timerStates.COMPLETE) {
      // eslint-disable-next-line
      Notification.permission === 'granted' && new Notification('Well Done, bro!!!')
      return (
        <button className="btn btn-info center-block" onClick={this.props.stopTimer}>
          Reset
        </button>
      )
    }
  }

  render() {
    return <div className="row">{this.getButton()}</div>
  }
}

export default TimerButton
