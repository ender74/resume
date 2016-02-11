var React = require("react")

var Link = React.createClass({
  render: function () {
      if (this.props.href) {
        return (
            <a href={this.props.href} target="_blank">{this.props.text}</a>
        );
      } else {
        return (
            <div>{this.props.text}</div>
        );
      }
  }
});

module.exports = Link