// Any live cell with fewer than two live neighbors dies, as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by overcrowding.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

// Need to know if "alive".

// Need to know how many neighbors are alive

// Toggle alive/dead

// Make board

// Time increment

describe("Cell", function(){
  describe("initialize", function() {
    it("initializes cell with true alive value and passed coordinates.", function(){
      var testCell = Object.create(Cell);
      testCell.initialize(1, 3);
      testCell.xCoordinate.should.equal(1);
      testCell.yCoordinate.should.equal(3);
      testCell.isAlive.should.equal(false);
    });
  });
  describe("create", function() {
    it("creates cell object passing coordinate values to initialize", function(){
      var testCell = Cell.create(1, 3);
      Cell.isPrototypeOf(testCell).should.equal(true);
      testCell.xCoordinate.should.equal(1);
      testCell.yCoordinate.should.equal(3);
      testCell.isAlive.should.equal(false);
    });
  });
  describe("isAliveToggle", function() {
    it("toggles isAlive to opposing state", function(){
      var testCell = Cell.create();
      testCell.isAlive.should.equal(false);
      testCell.isAliveToggle();
      testCell.isAlive.should.equal(true);
      testCell.isAliveToggle();
      testCell.isAlive.should.equal(false);
    });
  });
});
