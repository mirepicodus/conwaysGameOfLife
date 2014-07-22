// wrap around
// variable speed
// variable board size

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

describe("World", function() {
  describe("initialize", function() {
    it("initializes world with 100 spaces", function(){
      var testWorld = Object.create(World);
      testWorld.initialize();
      testWorld.cells[0].xCoordinate.should.equal(1);
      testWorld.cells[1].yCoordinate.should.equal(2);
    });
  });
  describe("create", function() {
    it("creates World object and calls initialize", function(){
      var testWorld = World.create();
      World.isPrototypeOf(testWorld).should.equal(true);
      testWorld.cells[0].xCoordinate.should.equal(1);
      testWorld.cells[1].yCoordinate.should.equal(2);
    });
  });
  describe("findCell", function(xCoordinate, yCoordinate) {
    it("finds and returns cell by coordinates", function(){
      var testWorld = World.create();
      var testCell = testWorld.findCell(1,1);
      testCell.xCoordinate.should.equal(1);
    });
  });
  describe("findAliveNeighbors", function() {
    it("finds states of all neighbors and sets cell isAliveNeighbors value.", function(){
      var testWorld = World.create();
      testWorld.cells[0].isAliveToggle();
      testWorld.cells[1].isAliveToggle();
      testWorld.cells[2].isAliveToggle();
      testWorld.findAliveNeighbors(testWorld.findCell(1, 2))
      testWorld.cells[1].isAliveNeighbors.should.equal(2);
    });
  });
  describe("setAliveNeighbors", function() {
    it("finds states of all neighbors and sets cell isAliveNeighbors value.", function(){
      var testWorld = World.create();
      testWorld.cells[0].isAliveToggle();
      testWorld.cells[1].isAliveToggle();
      testWorld.cells[2].isAliveToggle();
      testWorld.setAliveNeighbors();
      testWorld.cells[1].isAliveNeighbors.should.equal(2);
    });
  });
  describe("nextGeneration", function() {
    it("toggles isAlive based on life criteria", function(){
      var testWorld = World.create();
      testWorld.cells[10].isAliveToggle();
      testWorld.cells[11].isAliveToggle();
      testWorld.cells[12].isAliveToggle();
      testWorld.nextGeneration();
      testWorld.cells[1].isAlive.should.equal(true);
      testWorld.cells[11].isAlive.should.equal(true);
      testWorld.cells[21].isAlive.should.equal(true);
      testWorld.nextGeneration();
      testWorld.cells[10].isAlive.should.equal(true);
      testWorld.cells[11].isAlive.should.equal(true);
      testWorld.cells[12].isAlive.should.equal(true);
    });
  });
});
