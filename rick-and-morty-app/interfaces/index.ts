interface InfoProps {
  pages: number;
  next: number;
  prev: number;
  count: number;
}

export interface EpisodeProps {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  info: InfoProps;
}

export type EpisodeCardProps = Pick<
  EpisodeProps,
  "id" | "name" | "air_date" | "episode"
>;
// interface in TypeScript defines a structure for an object.
/*
It tells your program:
“Hey, if you have an object called InfoProps, it must have these exact things, and they must be these types.”
In this case, the things are: pages, next, prev, and count.
pages → How many pages of episodes there are in total, example 41 oages of episode
next → Which page comes next,Example: “You’re on page 1, the next page is page 2.”
prev → Which page came before Example: “You’re on page 1, there is no previous page → so prev is null.”
count → Total number of episodes Example: “There are 826 episodes in total.”
Why do we need it?

When we fetch data from the API, the API sends back this info object along with the episodes.We need a way to tell TypeScript what this data looks like so:
We don’t make mistakes (like expecting a string when it’s actually a number)
Our code knows exactly how to use the pagination info
Think of it like a label on a toy box: it tells you exactly what toys are inside so you don’t get confused.
*/
/*
What is export interface EpisodeProps?

interface = a blueprint or a rulebook for an object.

export = makes this blueprint available for other files to use.

EpisodeProps = the name of this blueprint.

Think of it like a mold for making episode objects. It tells TypeScript:
“Every episode object must have these exact properties.”

2. What each property means

id: number → The episode’s unique ID (like a serial number)

name: string → The episode’s name (e.g., “Pilot”)

air_date: string → When the episode aired (e.g., “December 2, 2013”)

episode: string → The code for the episode (e.g., “S01E01”)

info: InfoProps → The pagination info from the previous interface

This tells us how many pages, what’s next, and what’s previous

3. Why we need it

When we fetch episodes from the API, we get data like this:

{
  "id": 1,
  "name": "Pilot",
  "air_date": "December 2, 2013",
  "episode": "S01E01",
  "info": {
    "pages": 41,
    "next": 2,
    "prev": null,
    "count": 826
  }
}


EpisodeProps tells TypeScript exactly what this object should look like.

This helps prevent errors, like accidentally trying to use air_date as a number instead of a string.

✅ In simple analogy

EpisodeProps = a ticket template for each episode:

Every ticket must have: id, name, air date, episode code, and pagination info.

TypeScript uses this template to make sure your code handles episodes correctly.
 */
