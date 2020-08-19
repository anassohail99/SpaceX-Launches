import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import logo from "./assets/spacex.svg";
import Launches from "./components/Launches";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
