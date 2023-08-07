//? FIND ISLAND PERIMETER IN 2D ARRAY
var islandPerimeter = function (grid) {
  let perimeter = 0;
  grid[-1] = 0;
  grid[grid.length] = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        perimeter += 4;
        if (grid[i - 1][j] === 1) perimeter--;

        if (grid[i + 1][j] === 1) perimeter--;

        if (grid[i][j - 1] === 1) perimeter--;

        if (grid[i][j + 1] === 1) perimeter--;
      }
    }
  }
  return perimeter;
};
let grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];
console.log(islandPerimeter(grid));
