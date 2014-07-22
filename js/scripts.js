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

$(document).ready(function() {
  newWorld = World.create();

  setInterval(function() {
    $('#board').text("");
    for(var i = 1; i <= 10; i++) {
      $('#board').append("<tr id=\"row-" + i + "\">");
      for(var j = 1; j <=10; j++) {
        console.log(newWorld.findCell(i, j).isAlive);
        if (newWorld.findCell(i, j).isAlive)
          $('#row-' + i).append("<td class=\"alive\"></td>");
        else
          $('#row-' + i).append("<td class=\"dead\"></td>");
      }
      $('#board').append("</tr>");
    }
    newWorld.nextGeneration();
  }, 1000);
});


     // $('td').last().on( "click", function() {
      //   console.log(this);
      //   if($(this).css('background-color')=='#00cc00')
      //     $(this).css('background-color', '#336699');
      //   else {
      //    $(this).css('background-color', '#00cc00');
      //   }
