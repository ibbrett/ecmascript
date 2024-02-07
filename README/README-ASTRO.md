# Astro

Astro is an all-in-one web framework for building fast, content-focused websites

## what is it? why?

- Started with a focus on content
- Started out with a focus on markdown, making markdown a first class citizen
- You can do statically genrated pages, Server-side pages, API endpoints
- Has a premiere focus on speed, by default does not ship any JavaScript to the browser, really fast 
- You can leverage other frameworks (like Vue, Next, etc) right inside Astro

## Features 

- View Transitions
- Content Collections
- Defining Datatypes with Zod
- Callout (in sample seems to just be a link?) component in MDX
- Plugins for using other frameworks/components, like React

## Collections 

```js
import {getCollection} from "astro.content";
const posts = getCollection("posts");
```
