/**
 * @jsx React.DOM
 */
"use strict";

var React = require('React');
var $ = require('../../bower_components/jquery/jquery.min.js');
var sem = require('../../bower_components/semantic-ui/build/packaged/javascript/semantic.js');
/**
 * This is it. 
 */
var SCheckBox = React.createClass({
  getInitialState: function() {
    return {initialized: false};
  },
  componentDidMount: function() {
    this.setState({initialized: true});
    $('.song').checkbox(this.props.enabled ? 'enable' : 'disable');
  },
  render: function() {
    var classes = 'SCheckBox';
    return (
      <div className="ui toggle checkbox song" onClick={this.props.onClick}>
        <input type="checkbox" name="pet" id="song"/>
        <label htmlFor="song">Play song when ready</label>
      </div>
    );
  }
});

module.exports = SCheckBox;
