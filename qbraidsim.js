/*!
 * qbraidsim.js
 * Copyright (c) 2020 Trevor Glasgow <tglasgow31@gmail.com>
 * MIT Licensed
 */

(function() {

  // if(typeof superagent === 'undefined' && require) {
  //   superagent = require('superagent')
  //   btoa = require('btoa')
  // }

  var qbraidsim = {}

  qbraidsim.simulator = function() {
    var total = 2

    function simulator() {}

    simulator.run = function(val) {
      console.log(total);
      return total;
    }

    return simulator
  }

  if("undefined" != typeof exports)
    module.exports = qbraidsim
  else
    window.qbraidsim = qbraidsim

}

)()