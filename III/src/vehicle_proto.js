"use strict";

function Vehicle(id, max_speed) {
    this.id = id;
    this.max_speed = max_speed;
    this.speed = 0;
}

Vehicle.prototype = {};
Vehicle.prototype.status = function() { return this.speed };
Vehicle.prototype.start = function(speed) { this.speed = speed };
Vehicle.prototype.stop = function() { this.speed = 0; };

module.exports = Vehicle;