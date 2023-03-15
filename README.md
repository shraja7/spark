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

## Images
![1](https://user-images.githubusercontent.com/14989491/225208784-5ef138ce-d75c-4072-925d-b679ad345218.png)
![2](https://user-images.githubusercontent.com/14989491/225208800-a0d96f99-8f90-4ffb-a49f-30ce16943f88.png)
![3](https://user-images.githubusercontent.com/14989491/225208803-178871b2-fc1c-488c-823d-6210654a6313.png)
![4](https://user-images.githubusercontent.com/14989491/225208806-dcca1052-d262-42f3-a596-896156138122.png)

