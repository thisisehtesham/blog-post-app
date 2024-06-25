# Blog Post App

This repository demonstrates how to manage blog posts in a Redux application using Redux Toolkit. Below is a simplified explanation of how the code works:

## Setting up the Store

### Importing Libraries

I import necessary libraries like `react-redux` and `@reduxjs/toolkit`.

### Defining the Store

I create a store using `configureStore` from `@reduxjs/toolkit`. The store includes reducers (slices) which specify how the state changes based on actions. In this example, there are two reducers:

- `postsReducer` for blog posts
- `usersReducer` (not provided) for managing users.

## Defining Post Slices

### Creating a Slice

I define a slice for managing blog posts using `createSlice` from `@reduxjs/toolkit`.

#### The initial state includes:

- An empty array of posts.
- A status (`idle`, `loading`, `succeeded`, or `failed`) to track data fetching.
- An error object for handling errors.

### Actions

- `fetchPosts`: Fetches posts from an API using `axios`.
- `addNewPost`: Adds a new post to the server using `axios`.
- `updatePost`: Updates an existing post on the server using `axios`.
- `deletePost`: Deletes a post from the server using `axios`.
- `reactionAdded`: (Not implemented) Intended for adding reactions to a post.

### Handling Async Actions

#### Pending

Sets status to `loading` when a thunk is being executed.

#### Fulfilled

Updates the state when data is successfully fetched/added/updated/deleted:

- `fetchPosts`: Processes fetched data, adds reactions and timestamps, and updates the state.
- `addNewPost`: Assigns an ID, adds date and reactions, and pushes the new post to the state.
- `updatePost`: Updates the corresponding post in the state.
- `deletePost`: Removes the deleted post from the state.

#### Rejected

Sets status to `failed` and updates the error object if a thunk encounters an error.

## Selecting Data and Dispatching Actions

### Accessing Data

I use `useSelector` from `react-redux` to access data from the store in React components.

### Dispatching Actions

I use `useDispatch` from `react-redux` to dispatch actions that update the state.

## Components

- **Header**: Displays the blog title and navigation links.
- **Layout**: Provides the structure for the app with a header and main content area.
- **AddPostForm**: Renders a form to create new blog posts.
- **EditPostForm**: Renders a form to edit existing blog posts.
- **PostAuthor**: Displays the author name of a post.
- **TimeAgo**: Shows how much time has passed since the post was created.
- **ReactionButtons**: Renders buttons to add reactions to a post (not fully implemented).
- **PostsList**: Renders a list of blog post excerpts.
- **SinglePostPage**: Displays the details of a single blog post.

This project provides a complete example of managing blog post data in a Redux application using Redux Toolkit for efficient state management and asynchronous actions.
