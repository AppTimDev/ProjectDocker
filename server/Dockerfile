# specify the node base image with your desired version node:<version>
FROM node:18-alpine

# required for docker desktop port mapping
# replace this with your application's default port
EXPOSE 3000

WORKDIR /node

COPY package.json .

RUN npm install

Run npm i -g cross-env nodemon

COPY . .

CMD ["npm", "run", "dev"]