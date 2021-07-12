# smallurl

A simple url shortener build using the MERN stack.
Live Demo : https://mernurlshortener.herokuapp.com

# Features

- Easily shorten long urls
- User authentication
- Custom dashboard to manage your urls
- Track the number of clicks on your urls

# Steps to run on local machine :

Prerequisite : Node.js (12+),npm(6+), MongoDB (4+)

1. Clone the repository
2. Inside the project directory, create a `.env` file and add the following environment variables:

```
DB_URI=<your mongo connection string>
JWT_PRIVATE_KEY=<your private key>

```

3. Run the command `npm install` to install all the server side dependencies
4. Run the command `cd client && npm install` to install all the client side dependencies
5. At the root level of the project, run the command `npm run dev` to start the development server

Feel free to submit PRs to add new features, fix bugs and make code improvements.
