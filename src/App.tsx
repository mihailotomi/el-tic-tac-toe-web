import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { GameGrid } from "./components/bussines";
import { persistor, store } from "./store";

import "./styles/index.scss";

function App() {
  return (
    // <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <GameGrid />
    </Provider>
    // </PersistGate>
  );
}

export default App;
