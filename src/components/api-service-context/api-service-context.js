import React from 'react';

const ApiContext =  React.createContext();

const { Provider: ApiServiceProvider} = ApiContext;

export { ApiServiceProvider};

export default ApiContext;