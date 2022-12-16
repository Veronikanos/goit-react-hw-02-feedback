import React, { Component } from 'react';
import styles from './Feedback.module.css';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () => {
    this.setState(state => ({ good: state.good + 1 }));
  };

  addNeutral = () => {
    this.setState(state => ({ neutral: state.neutral + 1 }));
  };

  addBad = () => {
    this.setState(state => ({ bad: state.bad + 1 }));
  };

  render() {
    // const options = Object.keys(this.state);

    return (
      <section className={styles.sectionWrapper}>
        <div>
          <h1>Please leave feedback</h1>
          <div className={styles.buttonsList}>
            <button onClick={this.addGood}>Good</button>
            <button onClick={this.addNeutral}>Neutral</button>
            <button onClick={this.addBad}>Bad</button>
          </div>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
          </ul>
        </div>
      </section>
    );
  }
}
