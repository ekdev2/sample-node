var app = require("../");
var t = "test";
var expect = require('expect.js');

describe("testing the azure ci running test step", function () {
	it("a variable equals the right value", function () {

		expect(t).to.eql("test");

	});
});