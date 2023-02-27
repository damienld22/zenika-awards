import { Route, Routes } from "@solidjs/router";
import { Component, lazy } from "solid-js";
import Header from "./components/Header/Header";

const Home = lazy(() => import("./pages/Home"));
const Add = lazy(() => import("./pages/Add"));

const App: Component = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/add" component={Add} />
      </Routes>
    </div>
  );
};

export default App;
