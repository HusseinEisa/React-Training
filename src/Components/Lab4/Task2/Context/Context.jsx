import React from "react";

const Context = React.createContext();

const ContextProvider = Context.Provider;
const ContextConsumer = Context.Consumer;

export { ContextProvider, ContextConsumer };