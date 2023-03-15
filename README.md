# Spark - Share Your Ideas

Spark is a web application that allows users to post their ideas and interact with other people's ideas. It's a place to share your thoughts, collaborate, and get inspired. The application offers a simple and clean interface, making it easy for everyone to use.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Get Started](#get-started)
- [Contribute](#contribute)

## Technologies Used

- JavaScript
- Node.js
- Express
- Webpack

## Features

- **Post Ideas**: Users can easily post their ideas, with a title and a description.
- **View Ideas**: Browse through ideas posted by other users to get inspiration.
- **Interact with Ideas**: Users can delete ideas.
- **Bootleg Authorization**: Only the user who created the idea can delete it.

## Bootleg Authorization

Spark implements a simple, bootleg authorization mechanism to ensure that only the user who created an idea can delete it. When a user submits an idea, their unique username is associated with the idea. When attempting to delete an idea, the application verifies if the current user's username matches the idea's creator username. If it matches, the idea is deleted; otherwise, the user is not allowed to delete the idea. This is indicated by the 'X' makr on the idea card. If the username matches, the idea will have the 'X', otherwise it is blank.

