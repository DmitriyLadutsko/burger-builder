import React from "react";
import Layout from './components/Layout'
import BurgerBuilder from "./container/BurgerBuilder";

function App() {
  return (
    <div >
      <Layout>
          <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
