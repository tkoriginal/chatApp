#Chat App using React and WebSockets
---

A client-side SPA (single-page app) built with ReactJS, Webpack, Babel, Node.js and Web Sockets. The client-side app communicates with a server via WebSockets for multi-user real-time updates. No persistent database is involved; the focus is on the client-side experience

### Change name and send message
!["Chatty messages demo"](./docs/basic.gif)

### Send images using links
!["Chatty messages demo"](./docs/image.gif)

### Send images using Giffy
!["Chatty messages demo"](./docs/giffy.gif)

### Clone and install dependancies

```
clone repo
npm install dependencies in the root folder
npm install dependencies in the chat_server folder
```
### Launching the program

In the terminal of the root directory type `npm start` and in another terminal, navigate into the chat_server directory and `npm start`
then open `http://localhost:3000` or `http://0.0.0.0:3000`

### Usage
You have a couple of functionality:
1. You can change name by typing a new name and then hitting `Enter`
2. You can type a message as normal and send by hitting `Enter`
3. You can add a link to an image and hit enter to display on screen
4. You can use the `/giffy` tag along with text to get a gif from giffy
  - Example `/giffy cats`

Unsupported Feature:
You will not be able to add text and images links or use giffy in the same message.

### Dependencies

- babel-core
- babel-loader
- babel-preset-es2015
- babel-preset-react
- css-loader
- node-sass
- node-fetch
- sass-loader
- sockjs-client
- style-loader
- webpack
- webpack-dev-server
- react
- react-dom
- express
- uuid
- ws