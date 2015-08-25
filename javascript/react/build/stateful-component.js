var Timer = React.createClass({displayName: "Timer",
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
        React.createElement("div", null, 
          React.createElement("div", null, "Seconds Elapsed: ", this.state.secondsElapsed), 
          React.createElement("button", {onClick: this.handleClick}, "Hide the countdown")
        )
      );
    } else {
      return (
        React.createElement("button", {onClick: this.handleClick}, "Show me the countdown")
      );
    }
  }
});

React.render(React.createElement(Timer, null), document.getElementById('stateful-component'));
