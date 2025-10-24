import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://rickandmortyapi.com/graphql",
  }),
  cache: new InMemoryCache(),
});

export default client; //This allows you to use this client in any other file in your app.
/*
ApolloClient → This is the main tool that will let your app talk to a GraphQL API. Think of it like a remote control that can send requests to the API.
InMemoryCache → This is a storage system inside your app. It remembers the data you already fetched so you don’t have to ask the API for the same info again.
HttpLink → This sets up the connection to the API. It tells Apollo “Here’s the address of the API I want to talk to.”
"@apollo/client" → This is the library that contains all three of these things.

a) const client = new ApolloClient({...}), const → declares a variable called client.
new ApolloClient({...}) → creates a new instance of ApolloClient. Think of it like turning on a new remote control specifically for your app.
The object inside { ... } contains the settings for this client.
b) link: new HttpLink({ uri: "..." }) link → This tells Apollo where to send requests.
new HttpLink({...}) → creates the connection.
uri: "https://rickandmortyapi.com/graphql" → This is the URL of the Rick and Morty GraphQL API. This is where your client will send queries to get data.
c) cache: new InMemoryCache() cache → This tells Apollo to store the data it fetches.
new InMemoryCache() → creates a blank storage area in memory.
Why? So if you request the same characters again, Apollo can just get them from memory instead of asking the API again. Faster and more efficient!



*/
