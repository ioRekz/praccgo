/**
 * Copyright 2013 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @jsx React.DOM
 */

var Banner = require('./components/Banner/Banner.js');
var React = require('React');
var SiteBoilerPlate = require('./core/SiteBoilerPlate.js');
var VectorWidget = require('./components/VectorWidget/VectorWidget.js');
var NewPickup = require('./components/NewPickup/NewPickup.js');
var Jumbo = require('./components/Jumbo/Jumbo.js');
var PickupList = require('./components/PickupList/PickupList.js');


var index = React.createClass({
  render: function() {
    return (
      <SiteBoilerPlate>
        <Jumbo />
        <NewPickup />
        <div className="ui section horizontal icon divider">
          <i className="circular inverted reorder icon"></i>
        </div>
        <PickupList />
      </SiteBoilerPlate>
    );
  }
});

module.exports = index;
