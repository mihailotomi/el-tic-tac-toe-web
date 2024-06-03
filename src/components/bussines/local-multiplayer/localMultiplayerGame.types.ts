/**
 * Represents the grid scores for multiplayer game.
 * Each square is assigned a number which denotes the player that scored on that field or null if no player has.

 */
export type UserScores = [
  [number | null, number | null, number | null],
  [number | null, number | null, number | null],
  [number | null, number | null, number | null],
];
