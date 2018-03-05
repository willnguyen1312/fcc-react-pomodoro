import React, { Component } from 'react'
import Timer from './components/Timer'
import './App.css'

function AskForNotification() {
  // Let's check if the browser supports notifications
  if (!('Notification' in window)) {
    console.log('This browser does not support desktop notification')
  } else if (Notification.permission !== 'denied' || Notification.permission === 'default') {
    // Otherwise, we need to ask the user for permission
    Notification.requestPermission()
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}

class App extends Component {
  componentDidMount = () => {
    AskForNotification()
  }
  render() {
    return (
      <div className="panel panel-default app-content center-block">
        <div className="panel-body">
          <Timer />
        </div>
      </div>
    )
  }
}

export default App
