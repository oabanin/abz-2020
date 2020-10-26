import React from 'react';

const context =  React.createContext();

const { Provider: ApiServiceProvider} = context;

export { ApiServiceProvider};

export default context;