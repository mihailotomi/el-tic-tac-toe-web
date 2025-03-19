import { useGetMeQuery } from "@api";
import { Link } from "react-router-dom";

export function GameMode() {
  useGetMeQuery();

  return (
    <div>
      Choose mode: <br />
      <p>
        <Link to="/single-player">Single player</Link>
      </p>
      <p>
        <Link to="/local-multiplayer">Play with a friend</Link>
      </p>
    </div>
  );
}
