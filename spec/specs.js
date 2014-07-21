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
    it("initializes cell with false isAlive value, isAliveNeighbors with 0 and coordinates of cell.", function(){
      var testCell = Object.create(Cell);
      testCell.initialize(1, 3);
      testCell.xCoordinate.should.equal(1);
      testCell.yCoordinate.should.equal(3);
      testCell.isAlive.should.equal(false);
      testCell.isAliveNeighbors.should.equal(0);
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

describe("Board", function() {
  describe("initialize", function() {
    it("initializes board with 100 spaces", function(){
      var testBoard = Object.create(Board);
      testBoard.initialize();
      testBoard.cells[0].xCoordinate.should.equal(1);
      testBoard.cells[1].yCoordinate.should.equal(2);
    });
  });
  describe("create", function() {
    it("creates board object and calls initialize", function(){
      var testBoard = Board.create();
      Board.isPrototypeOf(testBoard).should.equal(true);
      testBoard.cells[0].xCoordinate.should.equal(1);
      testBoard.cells[1].yCoordinate.should.equal(2);
    });
  });
  describe("findCell", function(xCoordinate, yCoordinate) {
    it("finds and returns cell by coordinates", function(){
      var testBoard = Board.create();
      var testCell = testBoard.findCell(1,1);
      testCell.xCoordinate.should.equal(1);
    });
  });
  describe("findAliveNeighbors", function() {
    it("finds states of all neighbors and sets cell isAliveNeighbors value.", function(){
      var testBoard = Board.create();
      testBoard.cells[0].isAliveToggle();
      testBoard.cells[1].isAliveToggle();
      testBoard.cells[2].isAliveToggle();
      testBoard.findAliveNeighbors(testBoard.findCell(2, 2))
      testBoard.cells[11].isAliveNeighbors.should.equal(3);
    });
  });
  // describe("nextGeneration", function() {
  //   it("creates board object and calls initialize", function(){
  //     var testBoard = Board.create();
  //     Board.isPrototypeOf(testBoard).should.equal(true);
  //     testBoard.cells[0].xCoordinate.should.equal(1);
  //     testBoard.cells[1].yCoordinate.should.equal(2);
  //   });
  // });
});
