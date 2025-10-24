import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query getEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        pages
        next
        prev
        count
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

//gql is a function provided by Apollo.
//It “parses” or converts the string into a format that Apollo Client can understand.
//Without gql:Apollo Client wouldn’t know where the query starts, ends, or which parts are fields, variables, etc.
//You would get errors when trying to send it to the GraphQL API.
//gql makes sure Apollo Client knows this is a GraphQL query and can send it properly to the API.
/*
A query is a way to ask a GraphQL API for data.Think of it like asking a waiter in a restaurant:
“Can I get the episode name and air date for the first 10 episodes?”
In GraphQL, that “ask” is called a query.
query → tells GraphQL “I want to fetch data.”\
episodes { ... } → specifies what data you want (here: id, name, air_date).
GET_EPISODES is a JavaScript/TypeScript variable.
It stores the GraphQL query so you can use it later in your code.
.............................
query:
This tells GraphQL “I want to fetch data”.GraphQL has other operations like mutation (to change data) or subscription (to get live updates).
Since we just want to read data, we use query.
.................................
getEpisodes:This is the name of the query.Naming a query is optional, but it helps:
For debugging errors When using developer tools like Apollo DevTools
To know which query ran if you have many queries in your app
Think of it as labeling your question so you can easily identify it.
.........................
$page: Int

$page → the variable name

Int → the type (integer, e.g., 1, 2, 3)

Purpose: You can ask the API which page of episodes you want to fetch

b) $filter: FilterEpisode

$filter → variable name

FilterEpisode → type defined by the API

Purpose: Lets you filter episodes (e.g., by name, code, or air date)

Analogy:

Query = “Can I see some episodes?”

$page = “I want page 2”

$filter = “Only show episodes with ‘Rick’ in the title”
....................
In simple terms

query → we are fetching data

getEpisodes → the name of this query

($page: Int, $filter: FilterEpisode) → inputs we can pass to control which episodes we get
*/
