/**
 * @jsx React.DOM
 */
"use strict";


var React = require('React');
var $ = require('../../bower_components/jquery/jquery.min.js')
var sem = require('../../bower_components/semantic-ui/build/packaged/javascript/semantic.js');

/**
 * This is it. 
 */
var SSelect = React.createClass({
  getInitialState: function() {
    return {active: this.props.default, menu: 'hidden'};
  },
  componentDidMount: function() {
    $('.ui.dropdown').dropdown({verbose: false, debug: false, performance: false});
    this.setState({initialized: true});
  },
  vote: function(carte) {
    this.setState({active: carte})
  },
  changed: function(newval) {
    this.props.onChange(newval)
  },
  toggle: function() {
    this.setState({menu: this.state.menu == 'visible' ? 'hidden' : 'visible'})
  },
  render: function() {
    var cx = React.addons.classSet;
    var items = this.props.items.map(function(it) {
        var classes = cx({
          'item': true,
          'active': this.state.active == it
        });
      return (
        <div className="item" onClick={this.changed.bind(this, it)}>{it}</div>
      )
    }, this)
    return (
      <div className="ui dropdown selection">
        <input type="hidden" name="gender"/>
        <div className="default text">{this.props.default}</div>
        <i className="dropdown icon"></i>
        <div className="ui menu">
          {items}
        </div>
      </div>
    );
  }
});

module.exports = SSelect;
