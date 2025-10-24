// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { ApolloProvider } from "@apollo/client/react";
// import client from "@/graphql/apolloClient";

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <ApolloProvider client={client}>
//       <Component {...pageProps} />
//     </ApolloProvider>
//   );
// }
/*
1. import type { AppProps } from "next/app";This line imports a TypeScript type from Next.js.
AppProps is a type definition that tells TypeScript what props your custom App component receives.
Specifically:
Component → the page that is currently being rendered
pageProps → any data passed to that page
Think of it like giving TypeScript a map of what the inputs to your function will be, so it can catch mistakes early.
....................
import { ApolloProvider } from "@apollo/client/react";
ApolloProvider is a special wrapper component from Apollo Client.

Its job is to provide the Apollo Client to every part of your app.

Without it, you couldn’t use useQuery or other Apollo hooks in your pages or components.

Analogy:

Apollo Client = a connection to the GraphQL API

ApolloProvider = a power outlet that gives all your components access to that connection
............................................
import client from "@/graphql/apolloClient";

This imports the Apollo Client instance you created earlier in apolloClient.ts.

This client knows how to talk to the Rick and Morty GraphQL API.
.....................
function App({ Component, pageProps }: AppProps)

This is the custom App component in Next.js.

It runs for every page in your app.

It receives:

Component → the page being visited (like Home, Episodes, etc.)

pageProps → any data or props for that page


*/
import ErrorBoundary from "@/components/ErrorBoundary";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
