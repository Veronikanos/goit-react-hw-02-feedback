import React, { Component } from 'react';
import styles from './Feedback.module.css';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  addNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  addBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    const totalFeedbacksValues = Object.values(this.state);
    return totalFeedbacksValues.reduce((acc, num) => acc + num, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
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
            <li>Total: {this.countTotalFeedback()}</li>
            <li>
              Positive Feedback: {this.countPositiveFeedbackPercentage() || '0'}
              %
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
