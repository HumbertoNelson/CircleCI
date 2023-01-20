// const {expect} = require('chai')
// describe(<string of function name>, test function) within the test function: Often includes a beforeEach where you set data beforeEach(async()=> { await SyncAndSeed(); }); it("string of what the test should say", specific test function) //example specific test function () => { const category = Category.findAll() expect(category).length.to.equal(5) }

var assert = require("assert");
const { chai } = require("chai");

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(3), 3);
    });
  });
});
