var Component = React.createClass({displayName: "Component",
    render : function () {
        return (
            React.createElement("h1", null, "Hello World!")
        );
    }
});

React.renderComponent(React.createElement(Component, null), document.getElementById('app'));