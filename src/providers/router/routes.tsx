import { createBrowserRouter } from "react-router-dom";

import { Board, LocalMultiplayerGame, SquareColor } from "@components/bussines";
import { initGrid } from "@lib";
import { GameMode, Home } from "@screens";

import ErrorRoute from "./ErrorRoute";

export const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorRoute /> },
  {
    path: "/choose-mode",
    element: <GameMode />,
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
