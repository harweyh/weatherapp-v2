import React from 'react';


const baseURL = process.env.ENDPOINT;

const getForecastFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/forecast`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: '',
      id: '',
      icon: '',
      main: '',
      description: '',
    };
  }

  async componentWillMount() {
    const forecast = await getForecastFromApi();
    let hours = new Date(forecast.list[1].dt * 1000).getHours();
    console.log(hours);
    if (hours === 0) {
      hours = 'midnight';
    } else if (hours > 12) {
      hours = '{hours - 12 } PM';
    } else {
      hours += ' AM';
    }
    const icon = forecast.list[1].weather[0].icon.slice(0, -1);
    this.setState({ hours, icon });
  }

  render() {
    const { icon } = this.state;
    return (
      <div>
        <div>
          <h1> At { this.state.hours } it is going to be { this.state.description }
          </h1>
        </div>
        <div className="icon"> <img src={`/img/${icon}.svg`} alt="forecast" />
        </div>
      </div>

    );
  }
}


export default Forecast;
