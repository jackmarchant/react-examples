var Timer = React.createClass({
  getInitialState: function() {
    return {
      secondsElapsed: 0,
      showSeconds : false,
    };
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  handleClick : function() {
    this.setState({
      showSeconds : !this.state.showSeconds,
    });
  },
  render: function() {
    if (this.state.showSeconds) {
      return (
        <div>
          <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
          <button onClick={this.handleClick}>Hide the countdown</button>
        </div>
      );
    } else {
      return (
        <button onClick={this.handleClick}>Show me the countdown</button>
      );
    }
  }
});

React.render(<Timer />, document.getElementById('stateful-component'));
