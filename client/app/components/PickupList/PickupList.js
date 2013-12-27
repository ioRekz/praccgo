/**
 * @jsx React.DOM
 */
"use strict";

var React = require('React');

/**
 * This is it. 
 */
var PickupList = React.createClass({
  getInitialState: function() {
    return {initialized: false};
  },
  componentDidMount: function() {
    this.setState({initialized: true});
  },
  render: function() {
    return (
      <div className="row">
        <div className="ui three stackable column relaxed grid">
            <div className="column">
              <div className="ui raised segment game">
                <div className="ui green ribbon label"><i className="icon large time"></i> 12 mins ago</div>
                <div className="ui black bottom attached label">LIVE</div>
                    <div className="ui basic segment versus">
                <div className="ui two column grid">
                  <div className="row">
                    <div className="column">
                      <ul className="ui list players reds">
                        <li>ioRek</li>
                        <li>HaRts</li>
                        <li>apeX</li>
                        <li>kio</li>
                        <li>Kqly</li>
                      </ul>
                    </div>
                    <div className="ui vertical divider">
                        Vs
                      </div>
                    <div className="column">
                      <ul className="ui list players blues">
                        <li>f0rest</li>
                        <li>Xizt</li>
                        <li>Get_Right</li>
                        <li>friberg</li>
                        <li>fiflaren</li>
                      </ul>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="ui raised segment game">
                <div className="ui green ribbon label"><i className="icon large time"></i> 12 mins ago</div>
                <div className="ui label bottom attached blue">Blues victory</div>
                    <div className="ui basic segment versus">
                <div className="ui two column grid">
                  <div className="row">
                    <div className="column">
                      <ul className="ui list players reds">
                        <li>ioRek</li>
                        <li>HaRts</li>
                        <li>apeX</li>
                        <li>kio</li>
                        <li>Kqly</li>
                      </ul>
                    </div>
                    <div className="ui vertical divider">
                        Vs
                      </div>
                    <div className="column">
                      <ul className="ui list players blues">
                        <li>f0rest</li>
                        <li>Xizt</li>
                        <li>Get_Right</li>
                        <li>friberg</li>
                        <li>fiflaren</li>
                      </ul>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="ui raised segment game">
                <div className="ui green ribbon label"><i className="icon large time"></i> 12 mins ago</div>
                <div className="ui label bottom attached red">Reds victory</div>
                    <div className="ui basic segment versus">
                <div className="ui two column grid">
                  <div className="row">
                    <div className="column">
                      <ul className="ui list players reds">
                        <li>ioRek</li>
                        <li>HaRts</li>
                        <li>apeX</li>
                        <li>kio</li>
                        <li>Kqly</li>
                      </ul>
                    </div>
                    <div className="ui vertical divider">
                        Vs
                      </div>
                    <div className="column">
                      <ul className="ui list players blues">
                        <li>f0rest</li>
                        <li>Xizt</li>
                        <li>Get_Right</li>
                        <li>friberg</li>
                        <li>fiflaren</li>
                      </ul>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
});

module.exports = PickupList;
