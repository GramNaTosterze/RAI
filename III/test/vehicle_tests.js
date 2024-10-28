"use strict";
var expect = require('chai').expect;
const Vehicle = require("../src/vehicle");

describe('vehicle-tests', function() 
{
	let vehicle;

	beforeEach(function(){
		vehicle = new Vehicle(0, 10);  
	});	

	it('field id should should return undefined', function() 
	{
        expect(vehicle._id).to.undefined;
    });

	it('field max_speed should return undefined', function()
	{
		expect(vehicle._max_speed).to.undefined;
	});

	it('field max_speed should return undefined', function()
	{
		expect(vehicle._speed).to.undefined
	});

	it('setting field _speed should not modify Vehicle', function()
	{
		vehicle._speed = 2;
		expect(vehicle.status()).to.not.eql(2);
	});
	
	it('stop should lower speed', function()
	{
		vehicle.start(10);
		expect(vehicle.status()).to.eql(10);
		vehicle.stop();
		expect(vehicle.status()).to.eql(0);
	});
});