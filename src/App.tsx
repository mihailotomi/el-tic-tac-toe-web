import { Provider } from "react-redux";

import { store } from "@store";
import { GameGrid } from "@components/bussines";

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
