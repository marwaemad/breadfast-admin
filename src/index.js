import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import store from './store/store'

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: ''
})

const client = new ApolloClient({
  cache,
  link,
  dataIdFromObject: o => o.id
})

ReactDOM.render(<ApolloProvider client={client}><Provider store={store}><App /></Provider></ApolloProvider>, document.getElementById('root'));

serviceWorker.unregister();