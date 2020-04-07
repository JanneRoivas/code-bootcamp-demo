FROM node:12-alpine

WORKDIR /usr/src/app

COPY . .
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

FROM nginx:alpine
COPY --from:0 /usr/src/app/build /usr/share/gnix/html

EXPOSE 80