FROM node:6.11

# Create app directory
RUN mkdir -p /usr/src/chat-room
WORKDIR /usr/src/chat-room

# Install app dependencies
COPY package.json /usr/src/chat-room/
RUN npm install

# Bundle app source
COPY . /usr/src/chat-room

EXPOSE 3000
USER nobody:nogroup
CMD [ "npm", "start" ]
