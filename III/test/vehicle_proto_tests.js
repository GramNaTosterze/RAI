"use strict";
var expect = require('chai').expect;
const Vehicle = require("../src/vehicle_proto");

describe('vehicle_proto-tests', function() 
{
	let vehicle;

	beforeEach(function(){
		vehicle = new Vehicle(0, 10);  
	});	

	it('field id should public', function() 
	{
        expect(vehicle.id).to.not.undefined;
    });

	it('field max_speed public', function()
	{
		expect(vehicle.max_speed).to.not.undefined;
	});

	it('field max_speed public', function()
	{
		expect(vehicle.speed).to.not.undefined
	});

	it('setting field _speed modify Vehicle', function()
	{
		expect(vehicle.status()).to.eql(0);
		vehicle.speed = 2;
		expect(vehicle.status()).to.eql(2);
	});

	it('start should modify speed', function()
	{
		vehicle.start(10);
		expect(vehicle.status()).to.eql(10);
	});
	
	it('stop should lower speed', function()
	{
		vehicle.start(10);
		expect(vehicle.status()).to.eql(10);
		vehicle.stop();
		expect(vehicle.status()).to.eql(0);
	});

	it('access prototype', function()
	{
		expect(vehicle.prototype).to.undefined;
	});

	it('access _prototype', function()
	{
		expect(vehicle._prototype).to.undefined;
	});
	
	it('add method to prototype', function()
	{
		Vehicle.prototype.getID = function() { return this.id };
		expect(vehicle.getID()).to.eql(0);
	});
});