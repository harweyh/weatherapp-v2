#Weatherapp-v2 Frontend
FROM node:8.6.0
EXPOSE 8000
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install && npm cache clean --force
COPY . .
CMD npm start