import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "pages";
import { Layout } from "components";

import "./App.scss";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
//const App = () => <h2>Hello next.js</h2>;

export default App;
