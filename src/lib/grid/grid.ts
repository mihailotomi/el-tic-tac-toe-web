import { GridPosition, GridType } from "./grid.types";

export function gridInit<T>(value: T): GridType<T> {
  return [
    [value, value, value],
    [value, value, value],
    [value, value, value],
  ];
}

export function updateGrid<T>(grid: GridType<T>, value: T, position: GridPosition): GridType<T> {
  const newGrid: GridType<T> = [[...grid[0]], [...grid[1]], [...grid[2]]];
  newGrid[position.x][position.y] = value;
  return newGrid;
}
