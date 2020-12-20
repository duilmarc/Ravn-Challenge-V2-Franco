import { HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";

const URI_BASE = 'https://swapi-graphql.netlify.app/.netlify/functions/index';

const httpLink = new HttpLink({
  uri: URI_BASE,
});
const cache = new InMemoryCache();

export const client = new ApolloClient({
    link : httpLink,
    cache : cache,
});

