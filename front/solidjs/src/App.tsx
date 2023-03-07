import { Route, Routes } from "@solidjs/router";
import { Component, lazy } from "solid-js";
import Header from "./components/Header/Header";
import { CitationsProvider } from "./hooks/useCitations";

const Home = lazy(() => import("./pages/Home"));
const Add = lazy(() => import("./pages/Add"));

const App: Component = () => {
  return (
    <div>
      <Header />

      <CitationsProvider baseURL="http://localhost:3001/citations">
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/add" component={Add} />
        </Routes>
      </CitationsProvider>
    </div>
  );
};

export default App;
