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
  },
  findAliveNeighbors: function(cell) {
    return cell;
  }
}

var World = {
  initialize: function() {
    this.cells = [];
    for(var i = 1; i <= 10; i++) {
      for(var j = 1; j <=10; j++) {
        this.cells.push(Cell.create(i, j));
      }
    }
  },
  create: function() {
    var newWorld = Object.create(World);
    newWorld.initialize();
    return newWorld;
  },
  findCell: function(xCoordinate, yCoordinate) {
    var foundCell = { isAliveNeighbors: 0 };
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
          if (this.findCell(xCoordinate + i, yCoordinate + j).isAlive) {
            totalNeighborsAlive++;
          }
        }
      }
    }
    cellToCheck.isAliveNeighbors = totalNeighborsAlive;
  },
  setAliveNeighbors: function() {
    for(var i = 0; i < this.cells.length; i++) {
      this.findAliveNeighbors(this.cells[i]);
    }
  },
  nextGeneration: function() {
    this.setAliveNeighbors();
    this.cells.forEach(function(cell) {
      if(cell.isAlive) {
        if(cell.isAliveNeighbors < 2) {
          cell.isAliveToggle();
        } else if(cell.isAliveNeighbors > 3) {
          cell.isAliveToggle();
        }
      } else {
        if(cell.isAliveNeighbors === 3) {
          cell.isAliveToggle();
        }
      }
    });
  }
}
