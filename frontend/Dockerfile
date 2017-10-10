#Weatherapp Frontend

FROM node:8.6.0

RUN mkdir -p /opt/app

ARG PORT=8000
ENV PORT $PORT
EXPOSE $PORT

WORKDIR /opt
COPY package.json /opt
RUN npm install && npm cache clean --force
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . /opt/app
CMD npm start
