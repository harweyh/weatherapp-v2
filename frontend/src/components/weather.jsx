/* eslint no-console: 0 */
import React from 'react';

const baseURL = process.env.ENDPOINT;

const getWeatherFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/weather`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: '',
    };
  }

  async componentWillMount() {
    const weather = await getWeatherFromApi();
    this.setState({ icon: weather.icon.slice(0, -1) });
  }

  render() {
    const { icon } = this.state;

    return (
      <div className="icon">
        { icon && <img src={`/img/${icon}.svg`} alt="weather" /> }
      </div>
    );
  }
}

export default Weather;
