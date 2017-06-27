# Chat Room [![Build Status](https://travis-ci.org/tsoliangwu0130/chat-room.svg?branch=master)](https://travis-ci.org/tsoliangwu0130/chat-room)

A real-time chat room web application built with [socket.io](https://socket.io/) and [Node.js](https://nodejs.org/en/). Chat now: https://tsoliang-chat-room.herokuapp.com/

## Getting Started

### Quick Start

1. To install app dependencies, simply:

    `$ npm install`

2. Start the app at [localhost:3000](http://localhost:3000):

    `$ npm start`

### Docker

[Dockerfile](Dockerfile) is also provided. To run this app in a container, just simply install [Docker](https://www.docker.com/) first, then:

1. Build the docker image:

    `$ docker build -t tsoliang/chat-room .`

2. Run the app in a docker container and expose the container port to local port 3000:

    `$ docker run -p 3000:3000 -d tsoliang/chat-room`
