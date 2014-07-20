var Cell = {
  initialize: function(xCoordinate, yCoordinate) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.isAlive = false;
  },
  create: function(xCoordinate, yCoordinate) {
    var newCell = Object.create(Cell);
    newCell.initialize(xCoordinate, yCoordinate);
    return newCell;
  },
  isAliveToggle: function() {
    if(this.isAlive) {
      this.isAlive = false;
    } else {
      this.isAlive = true;
    }
  }
}
