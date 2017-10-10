const debug = require('debug')('weathermap');

const Koa = require('koa');
const router = require('koa-router')();
const fetch = require('node-fetch');
const cors = require('kcors');

const appId = process.env.APPID || 'af9ccbc99ddc41fce5af2c52aef028f2';
const mapURI = process.env.MAP_ENDPOINT || 'http://api.openweathermap.org/data/2.5';
const targetCity = process.env.TARGET_CITY || 'Helsinki,fi';

const port = process.env.PORT || 9000;

const app = new Koa();

app.use(cors());

const fetchWeather = async () => {
  const endpoint = `${mapURI}/weather?q=${targetCity}&appid=${appId}&`;
  const response = await fetch(endpoint);
  return response ? response.json() : {};
};

const fetchForecast = async () => {
  const endpoint = `${mapURI}/forecast?q=${targetCity}&appid=${appId}&`;
  const response = await fetch(endpoint);
  return response ? response.json() : {};
};

router.get('/api/weather', async ctx => {
  const weatherData = await fetchWeather();
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = weatherData.weather ? weatherData.weather[0] : {};
});

router.get('/api/forecast', async ctx => {
  const forecastData = await fetchForecast();
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = forecastData || {};
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

debug(`App listening on port ${port}`);
