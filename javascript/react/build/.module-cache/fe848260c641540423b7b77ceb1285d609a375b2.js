var Component = React.createClass({displayName: "Component",
    render : function () {
        return (
            React.createElement("h1", null, "Hello ", this.props.name, "!")
        );
    }
});

var List = React.createClass({displayName: "List",
    render: function() {
        var components = this.props.names;
        return (
          React.createElement("ol", null, 
            components.map(function(component) {
              return React.createElement(Component, {key: component.id, name: component.name});
            })
          )
        );
    }
});

var namesData = [
    'Jack',
    'John',
    'Rowen',
    'Steve',
    'Mitch'
];

React.render(React.createElement(List, {names: namesData}), document.getElementById('app'));