# Implement Docker in a React Native app 

## About the repository

link to video tutorial : https://youtu.be/L-Dh5ae4Zcg 

This repository is complementary to this video tutorial which shows how to implement Docker in a React Native application. 

**Note**: For the purposes of this demo we only show the app as a web application as the source code of the React native project is not compatible with ios and android devices. This is due to the fact the backend is not configured using Https connections and is blocked by most devices. In theory if your React native project has implemented SSL, the app will work on all devices with this docker tutorial

## Authors 

George Bassilious @George-Bassilious
Eva Despinoy @evkade

## Prerequisites 

- Have Node.js and installed on you device
You can find help for installation here : https://nodejs.org/en/download/

- Have docker-compose and docker destop installed 
You can find help for installation here : https://www.docker.com/get-started

## Commands used in the tutorial: 

Install needed dependencies (when running for the first time) 
```bash
$ npm install 
```

Run server
```bash
$ node server.js 
```

Run app
```bash
$ npm run web 
```

Build Docker image
```bash
$ docker-compose build
```

Run Docker image
```bash
$ docker-compose up
```
or (if you want to run it with Docker-desktop)
```bash
$ docker-compose up -d
```

List all active docker containers
```bash
$ docker ps
```

Stop app 
```bash
$ CTRL c
```

Delete docker environment(s)
```bash
$ docker-compose down
```

## Acknowledgments 
The code used for the docker implementation is based on the code by Sophia Brandt found here: https://www.rockyourcode.com/how-to-run-react-native-expo-web-in-a-docker-container/
