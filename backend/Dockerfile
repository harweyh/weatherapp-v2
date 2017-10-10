# weatherapp Backend Dockerfile
FROM node:8.6.0
RUN mkdir -p /opt/src

ARG PORT=9000
ENV PORT $PORT
EXPOSE $PORT

WORKDIR /opt
COPY package.json /opt
RUN npm install && npm cache clean --force
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/src
COPY . /opt/src
CMD npm start


# FROM node:8.6.0
# EXPOSE 9000
# RUN mkdir -p /opt/app
# WORKDIR /opt/app
# COPY package.json package.json
# RUN npm install && npm cache clean --force
# RUN mkdir /opt/app/src
# WORKDIR /opt/app/src
# COPY . .
# CMD npm start
