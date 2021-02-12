FROM node:15.8.0-alpine3.10

WORKDIR /code
COPY package.json /code

RUN npm install

COPY . /code

EXPOSE 8080

ENTRYPOINT ["yarn", "serve"]
