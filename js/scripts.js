var Cell = {
  initialize: function(xCoordinate, yCoordinate) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.isAliveNeighbors = 0;
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

var Board = {
  initialize: function() {
    this.cells = [];
    for(var i = 1; i <= 10; i++) {
      for(var j = 1; j <=10; j++) {
        this.cells.push(Cell.create(i, j));
      }
    }
  },
  create: function() {
    var newBoard = Object.create(Board);
    newBoard.initialize();
    return newBoard;
  },
  findCell: function(xCoordinate, yCoordinate) {
    var foundCell;
    this.cells.forEach(function(cell) {
      if(xCoordinate === cell.xCoordinate && yCoordinate === cell.yCoordinate)
        foundCell = cell;
    });
    return foundCell;
  },
  findAliveNeighbors: function(cellToCheck) {
    var totalNeighborsAlive = 0;
    var xCoordinate = cellToCheck.xCoordinate;
    var yCoordinate = cellToCheck.yCoordinate;
    for(var i = -1; i <= 1; i++) {
      for(var j= -1; j <= 1; j++) {
        if (!(i === 0 && j === 0)) {
          console.log(this.findCell(xCoordinate + i, yCoordinate + j));
          if (this.findCell(xCoordinate + i, yCoordinate + j).isAlive) {
            totalNeighborsAlive++;
          }
        }
      }
    }
    cellToCheck.isAliveNeighbors = totalNeighborsAlive;
  }
}
