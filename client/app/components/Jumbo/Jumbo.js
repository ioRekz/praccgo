/**
 * @jsx React.DOM
 */
"use strict";

var React = require('React');

/**
 * This is it. 
 */
var Jumbo = React.createClass({
  getInitialState: function() {
    return {initialized: false};
  },
  componentDidMount: function() {
    this.setState({initialized: true});
  },
  render: function() {
    var classes = 'Jumbo';
    return (
      <div className="row">
      <div className="sixteen wide column">
        <div className="ui center aligned raised segment">
          <h1 className="ui header">PRACCGO PICKUP</h1>
          <div className="ui facebook button">
            <i className="facebook icon"></i>
            Facebook Login
          </div>
          // <h2>Christopher "GeT_RiGhT" Alesund</h2>
        </div>
      </div>
      </div>
    );
  }
});

module.exports = Jumbo;
