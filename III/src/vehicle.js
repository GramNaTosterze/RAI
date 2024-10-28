"use strict";

module.exports = function Vehicle(id, max_speed) {
    let _id = id;
    let _max_speed = max_speed;
    let _speed = 0;

    return  {
        status: function() { return _speed },
        start: function(speed) { _speed = speed },
        stop: function() { _speed = 0; },
    }
}