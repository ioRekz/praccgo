/**
 * @jsx React.DOM
 */
"use strict";

var React = require('React');

/**
 * This is it. 
 */
var Hider = React.createClass({
  getInitialState: function() {
    return {initialized: false};
  },
  componentDidMount: function() {
    this.setState({initialized: true});
  },
  render: function() {
    var classes = 'Hider';
    var children = this.props.predicate ? this.props.children : ''
    return <span>{this.props.predicate ? this.props.children : ''}</span>
  }
});

module.exports = Hider;
