import React from "react";
import Header from "./components/Header";
import { useApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function App() {
  const client = new useApolloClient({
    uri: "http://localhost/5000/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="App">
          <h1>Hello world for graphQL</h1>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
