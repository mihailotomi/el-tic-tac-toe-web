import { UserScores } from "../localMultiplayerGame.types";

export function determineWinner(scores: UserScores): number | null {
  for (let i = 0; i < 3; i++) {
    // horizontal
    if (scores[i][0] && scores[i][0] === scores[i][1] && scores[i][1] === scores[i][2]) {
      return scores[i][0];
    }
    // vertical
    if (scores[0][i] && scores[0][i] === scores[1][i] && scores[1][i] === scores[2][i]) {
      return scores[0][i];
    }
  }

  // diagonals
  if (scores[0][0] && scores[0][0] === scores[1][1] && scores[1][1] === scores[2][2]) {
    return scores[0][0];
  }
  if (scores[0][2] && scores[0][2] === scores[1][1] && scores[1][1] === scores[2][0]) {
    return scores[0][2];
  }

  return null;
}
