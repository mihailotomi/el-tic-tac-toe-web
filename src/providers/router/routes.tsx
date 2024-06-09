import { createBrowserRouter } from "react-router-dom";
import { Board, LocalMultiplayerGame } from "@components/bussines";
import { initGrid } from "@lib";
import { SquareColor } from "src/components/bussines/board/board.types";
import ErrorRoute from "./ErrorRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Choose mode: <br />
        <p>
          <a href="/single-player">Single player</a>
        </p>
        <p>
          <a href="/local-multiplayer">Play with a friend</a>
        </p>
      </div>
    ),
    errorElement: <ErrorRoute />,
  },
  {
    path: "/single-player",
    element: <Board squareColors={initGrid<SquareColor>("grey")} onAnswerCheck={() => {}} onValidAnswer={() => {}} />,
    errorElement: <ErrorRoute />,
  },
  {
    path: "/local-multiplayer",
    element: <LocalMultiplayerGame />,
    errorElement: <ErrorRoute />,
  },
]);
