var Component = React.createClass({displayName: "Component",
    render : function () {
        return (
            React.createElement("h1", null, "Hello ", this.props.name, "!")
        );
    }
});

React.render(React.createElement(Component, {name: "Jack"}), document.getElementById('app'));