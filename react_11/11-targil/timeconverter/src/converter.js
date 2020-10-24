import React from 'react';
import { useState } from 'react';

export default class Converter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {seconds : 0}
    this.updateSeconds = this.updateSeconds.bind(this);
  }

  updateSeconds(seconds) {
    this.setState({seconds: seconds});
  }

  render() {
    const seconds = this.state['seconds'];
    const minutes = seconds / 60;
    const hours = seconds / 3600;
    
    return (
      <div>
        <label>seconds: <input value={seconds} onChange={e => this.updateSeconds(e.target.value)} /> </label>
        <label>minutes: <input value={minutes} onChange={e => this.updateSeconds(e.target.value * 60)} /> </label>
        <label>hours: <input value={hours} onChange={e => this.updateSeconds(e.target.value * 3600)} /> </label>
      </div>
    );
  }
}

