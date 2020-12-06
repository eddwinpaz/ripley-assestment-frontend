import React from 'react';
const AppContext = React.createContext({
    products:[],
    search: (query: string) => {},
    isLoading: false,
});
export { AppContext as default };