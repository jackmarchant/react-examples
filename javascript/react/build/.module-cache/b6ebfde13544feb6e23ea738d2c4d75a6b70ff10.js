var ListItemWrapper = React.createClass({displayName: "ListItemWrapper",
  render: function() {
    return React.createElement("li", null, this.props.data.text);
  }
});

var MyComponent = React.createClass({displayName: "MyComponent",
  render: function() {
    return (
      React.createElement("ul", null, 
        this.props.results.map(function(result) {
           return React.createElement(ListItemWrapper, {key: result.id, data: result});
        })
      )
    );
  }
});

var namesData = ['Jack', 'John', 'Rowen'];

React.render(React.createElement(MyComponent, {results: namesData}), document.getElementById('app'));