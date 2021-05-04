FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies

COPY package*.json ./

#install node_modules folder
RUN npm install


# Bundle app source
COPY . .

#the port to be served on
EXPOSE 8000
CMD [ "node", "server.js" ]