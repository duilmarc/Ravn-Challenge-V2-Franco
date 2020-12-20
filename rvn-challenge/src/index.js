import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from "@apollo/client"
import {client} from "./Apollo-Client/configuration"

render(
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
, document.getElementById('root'));

