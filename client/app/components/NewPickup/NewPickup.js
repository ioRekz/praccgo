/**
 * @jsx React.DOM
 */
"use strict";

var React = require('React');
var Qajax = require('../../bower_components/qajax/build/qajax.min.js');
var _ = require('../../bower_components/lodash/dist/lodash.min.js');
var $ = require('../../bower_components/jquery/jquery.min.js');
var sem = require('../../bower_components/semantic-ui/build/packaged/javascript/semantic.js');
var SSelect = require('../SSelect/SSelect.js')
var Hider = require('../Hider/Hider.js')
var SCheckBox = require('../SCheckBox/SCheckBox.js')

/**
 * This is it. 
 */
var NewPickup = React.createClass({
  getInitialState: function() {
    return {players: 
      [
      {player: "ioRek", stats: "12/20", map: "No d2"},
      {player: "f0rest", stats: "12/20", map: "No d2"},
      {player: "getright", stats: "12/20", map: "No d2"},
      {player: "kqly", stats: "12/20", map: "No d2"},
      {player: "xizt", stats: "12/20", map: "No d2"},
      {player: "delpan", stats: "12/20", map: "No d2"},
      {player: "twist", stats: "12/20", map: "No d2"}
    ],
    me: 'ioRek',
    song: true,
    stacks: _(["red", "green", "teal", "blue", "purple"])
      .reduce(function(acc, curr) {
        acc[curr] =  []; 
        if(curr=='teal') acc[curr] = ['f0rest', 'kqly']
        return acc;
      }, {})
    };
  },
  componentDidMount: function() {
    this.setState({initialized: true});
  },
  componentDidUpdate: function() {

    $('.pop').popup();
  },
  joinLeave: stateTransition(function(state, who) {
    var player = who || this.state.me;
    var cstack = this.currentStack(player);
    var stacks = cstack ? this.clearStack(state.stacks, cstack) : state.stacks;
    var newps = this.isPlaying(player) ? this.remove(state.players, player) : this.add(state.players, null, player, "5/10")
    return {players: newps};
  }),
  stackWith: stateTransition(function(state, friend) {
    if(friend == this.state.me) return;
    if(this.currentStack(friend, this.state.stacks)) return;
    var that = this
    var color = this.calcStackColor(this.state.me)
    var stacks = this.state.stacks
    if(this.isFriend(friend)) stacks[color] = []
    else stacks[color] = [friend, this.state.me]//only 2 player per stack
    return {
        players: this.isPlaying() ? this.state.players : this.add(this.state.players, null, this.state.me, "5/10"),//_.sortBy(this.state.players, function(it) { return that.currentStack(it.player, stacks) }), 
        stacks: stacks
    }
  }),
  triggerSong: stateTransition(function(state) {
    return {song: !state.song}
  }),
  isFriend: function(friend) {
    return _.some(this.state.stacks, function(it) {return _.contains(it, friend) && _.contains(it, this.state.me)}, this)
  },
  isCaptain: function(players, who) {
    var player = who || this.state.me
    return _.first(players).player == player
  },
  clearStack: function(stacks, color) {
    var st = stacks;
    st[color] = [];
    return st
  },
  calcStackColor: function(p) {
    var curr = this.currentStack(p)
    if(curr) return curr 
    else return this.availableStack()
  },
  currentStack: function(p, stacks) {
    var st = stacks || this.state.stacks
    return _.findKey(st, function(it) {return _.contains(it, p)})
  },
  availableStack: function() {
    return _.findKey(this.state.stacks, function(it) {return it.length == 0})
  },
  lens: function(arr, pred, up) {
    return _.map(arr, function(it) {
      return pred(it) ? up(it) : it
    })
  },
  add: function(players, playerFull, name, stats) {
    var p = name ? this.newPlayer(name, stats) : playerFull
    return players.concat([p])
  },
  remove: function(players, player) {
    return _.reject(players, {player: player})
  },
  newPlayer: function(name, stats) {
    return {player: name, stats: stats}
  },
  isPlaying: function(who) {
    var player = who || this.state.me
    return _.some(this.state.players, {player: player})
  },
  actionPick: function() {
    return this.isPlaying() ? 'Leave' : 'Join'
  },
  voteMap: function(zemap) {
    console.log("ozpdk")
  },
  render: function() {
    var cx = React.addons.classSet;
    var classes = 'circular icon link icon stack'
    var joinButton = cx({
      'ui large labeled icon button': true,
      'teal': !this.isPlaying(),
      'red' : this.isPlaying()
    })
    var joinIcon = cx({
      'hand icon': true,
      'right': !this.isPlaying(),
      'down': this.isPlaying()
    })
    var ps = this.state.players.map(function(player, idx) {
              var stack = this.currentStack(player.player)
              var clazz = stack ? classes + " users " + stack : classes + " user pad"
              return (
                <tr>
                  <td>{idx+1}</td>
                  <td>{player.player}</td>
                  <td>{player.stats}</td>
                  <td className="pick stack"><i className={clazz} onClick={this.stackWith.bind(this, player.player)}></i></td>
                </tr>
              )
            }, this);
    return (
      <div className="row">
      <div className="ui basic modal">
          <div className="header">
            Change Your Homepage
          </div>
          <div className="content">
            <div className="left">
              <i className="home icon"></i>
            </div>
            <div className="right">
              <p>Are you sure you want to change your homepage to <b>Poodle.com</b>?</p>
            </div>
          </div>
          <div className="actions">
            <div className="two fluid ui buttons">
              <div className="ui negative labeled icon button">
                <i className="remove icon"></i>
                No
              </div>
              <div className="ui positive right labeled icon button">
                Yes
                <i className="checkmark icon"></i>
              </div>
            </div>
          </div>
        </div>
      <div className="sixteen wide column">
      <table className="ui table segment">
        <thead>
          <tr>
          <th className="three wide">#</th>
          <th className="six wide">Player</th>
          <th>Stats</th>
          <th className="pick stack pop" data-content="Coucou" data-position='top'>Click to stack-up</th>
          </tr>
        </thead>
        <tbody>
          {ps}
        </tbody>
        <tfoot>
          <tr><th colSpan="4">
            Current map: dust2        Current server: 212.1201.12
          </th>
        </tr></tfoot>
      </table>
      <div className={joinButton} onClick={this.joinLeave.bind(this, this.state.me)}><i className={joinIcon}></i> {this.actionPick()}</div>
      <Hider predicate={this.isPlaying()}>
        <SCheckBox enabled={this.song} onClick={this.triggerSong}/>
      </Hider>
      <Hider predicate={this.isCaptain(this.state.players)}>
        <SSelect items={["Dust2", "Inferno", "Nuke", "Mirage"]} default='Vote Map' onChange={this.voteMap} />
      </Hider>
      </div>
      </div>
    );
  }
});

function stateTransition(x) {
    return function() {
        var newArgs = Array.prototype.slice.call(arguments);
        newArgs.unshift(this.state);
        this.setState(x.apply(this, newArgs));
    };
}

module.exports = NewPickup;
