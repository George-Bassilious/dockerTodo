# code based on : https://www.rockyourcode.com/how-to-run-react-native-expo-web-in-a-docker-container/


# pull base image
FROM node:14.13.1-buster-slim

# default to port 19006 for node
ARG PORT=19006
ENV PORT $PORT

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest

# install dependencies first, in a different location for easier app bind mounting for local development
# /opt is in the virtual container, and needs specific permissions
RUN mkdir /opt/dockerTodo && chown node:node /opt/dockerTodo
WORKDIR /opt/dockerTodo
ENV PATH /opt/dockerTodo/.bin:$PATH

COPY --chown=node:node ./App/package.json ./
COPY --chown=node:node ./App/package-lock.json ./
USER node
RUN npm install

# copy in our source code last, as it changes the most
WORKDIR /opt/dockerTodo/app

ENTRYPOINT ["npm", "run"]
CMD ["web"]