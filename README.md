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
- Babelify server.js (if server.js has been updated)
```bash
> babel server.js -o server.out.js
```

## Run development server
- Export ```NODE_ENV``` environment variable
```bash
> export NODE_ENV=development
```

Without Passenger:
```bash
> npm start
```

With Passenger:
```bash
> passenger start --app-type node --startup-file ./server.out.js
```

## Run production server
- Export ```NODE_ENV``` environment variable
```bash
> export NODE_ENV=production
> export PORT=8888
```

```bash
> sudo nginx
> tail -f /var/log/nginx/nginx_error.log
> npm run build
```

## Development
- For hot module replacement to work, do not run ```npm run build```. Instead, run ```npm start``` (make sure ```/dist``` directory does not exist).
- JS entry file: ```app/main.js```
