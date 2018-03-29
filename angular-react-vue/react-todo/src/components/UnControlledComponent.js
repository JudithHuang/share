import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class UnControlledComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.value);
    console.log(this.input);
    event.preventDefault();
  }

  render() {
    return (
      <div className="uncontrolled-component">
        Uncontrolled Component:
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={(input) => this.input = input} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UnControlledComponent;
