# Lodestone
Lodestone Web App Development

## Setup
- Install Passenger Phusion
```bash
> brew install passenger
> passenger-config validate-install
```
- Install Nginx --with-passenger
```bash
> brew install nginx --with-passenger
```
- Clone this repository
```bash
> git clone https://github.com/oliverox/lodestone.git
```
- Install dependencies
```bash
> cd lodestone
> npm install
```

## Run development server
Without Passenger:
```bash
> npm start
```

With Passenger:
```bash
> passenger start --app-type node --startup-file ./server.out.js
```

## Run production server
```bash
> sudo nginx
> npm run build
> open http://localhost:8080
```

## Development
- For hot module replacement to work, do not run ```npm run build```. Instead, run ```npm start``` (make sure ```/dist``` directory does not exist).
- JS entry file: ```app/main.js```
