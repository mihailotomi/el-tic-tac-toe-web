import { useRouteError } from "react-router-dom";

export default function ErrorRoute() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access */}
        <i>{(error as any)?.statusText}</i>
        <br />
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access */}
        <i>{(error as any)?.message}</i>
      </p>
    </div>
  );
}
