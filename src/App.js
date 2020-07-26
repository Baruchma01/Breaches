import React from "react";
import Layout from "./components/Layout/Layout";
import Breanches from "./containers/Breaches/Breaches";
import axios from "axios";

function App() {
  axios.defaults.headers.common["X-Best-Pokemon"] = "Mew";
  return (
    <div>
      <Layout>
        <Breanches />
      </Layout>
    </div>
  );
}

export default App;
