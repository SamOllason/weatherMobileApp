import React, {Component} from 'react';
import ForecastList from './ForecastList';
import {StyleSheet, View, Alert} from 'react-native';
import CurrentWeatherPane from './CurrentWeatherPane';
import BackgroundImage from './BackgroundImage';
import BottomSection from './BottomSection';
import * as types from './types';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const appId = '03d6a8a8a5e2a10e41df0d808802c751';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      textInput: types.defaultInfo,
      city: types.defaultInfo,
      currentWeather: types.defaultInfo,
      temperature: types.defaultInfo,
      textColour: types.whitesmoke,

      forecast: [],
      modalVisible: false,
    };

    this.getWeather    = this.getWeather.bind(this);
    this.showModal     = this.showModal.bind(this);
    this.hideModal     = this.hideModal.bind(this);
    this._onTextChange = this._onTextChange.bind(this);
  }

  /**
   * Attempt to fetch current weather for using text input from user
   * If successful then set state and also fetch forecast for next 5 days.
   * If forecast request unsuccessful show alert with error message
   *
   * If current weather request not successful then show alert and do not make forecast request.
   */

  getWeather = async() => {

    const city = this.state.textInput;

    // use 'await' because function returns a promise
    const currentWeatherData = await this.getCurrentWeather(city);

    const currentWeatherRequestAllOk = this.checkDataStatusOk(currentWeatherData);

    if(!currentWeatherRequestAllOk) {
      // show alert and do not attempt to get forecast
      this.handleError(currentWeatherData);
    } else {
      this.updateCurrentWeather(currentWeatherData);

      // Since current weather fetch was a success, get forecast
      const forecastData      = await this.getForecast(city);
      const forecastDataAllOk = this.checkDataStatusOk(forecastData);

      if(!forecastDataAllOk){
        this.handleError(forecastData);
      } else {
        this.updateForecastDataInState(forecastData);
      }
    }
  };

  getCurrentWeather = async (city, token = types.APIToken) => {
    try {
      const currentWeatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${token}&units=metric`
      );

      const currentWeatherResponseJson = await currentWeatherResponse.json();

      return currentWeatherResponseJson;

    } catch(err) {
      console.log(`current weather request Error: ${err}`);
      return err;
    }
  };

  checkDataStatusOk = (data) => {
    return data.cod === 200 || data.cod === "200";
  };

  updateCurrentWeather = (weatherData) => {

    // const currentWeather = weatherData.weather[0].main;

    const currentWeather = 'snow';

    const textColour  = this.getTextColour(currentWeather);

    this.setState({
      // Make it clear to user what city data is for.
      city: weatherData.name,
      temperature: weatherData.main.temp,
      currentWeather: currentWeather,
      textColour: textColour
    });
  };

  updateForecastDataInState = (forecastData) => {
    this.setState({
      forecast: forecastData.list,
    });
  };

  handleError = (data) => {
    if(data.message) {
      Alert.alert(data.message);
    } else {
      Alert.alert("Unknown error");
    }
  };

  getForecast = async (city) => {
    try {
      const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${appId}&units=metric`
      );
      const forecastResponseJson = await forecastResponse.json();

      return forecastResponseJson;

    } catch(err){
        console.log(`forecast weather request Error: ${err}`);
        return err;
    }
  };

  _onTextChange = (input) => {
    this.setState({
      textInput: input
    });
  };

  showModal = () => {
    this.setState({
      modalVisible: true
    });
  };

  hideModal = () => {
    this.setState({
      modalVisible: false
    });
  };

  getTextColour = (currentWeather) => {
    if(currentWeather === types.defaultInfo) {
      return types.whitesmoke;
    } else {
      return currentWeather.toLowerCase() === 'snow' ? types.grey : types.whitesmoke;
    }
  };

  render() {

    const { city, temperature, forecast, modalVisible, currentWeather, textColour} = this.state;

    return (
      <View style={styles.container}>

        <BackgroundImage
            currentWeather={currentWeather}
        />

        <CurrentWeatherPane
            city={city}
            currentWeather={currentWeather}
            temperature={temperature}
            textColour={textColour}
        />

        <ForecastList
            currentWeather={currentWeather}
            forecast={forecast}
            textColour={textColour}
        />

        <BottomSection
            getWeather={this.getWeather}
            onTextChange={this._onTextChange}
            showModal={this.showModal}
            closeModal={this.hideModal}
            modalVisible={modalVisible}
            currentWeather={currentWeather}
            textColour={textColour}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: '#F5FCFF',
  },

  topContainer: {
    marginTop: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightskyblue',
    textAlign: 'center',
  },

  city: {
    height: 100,
    margin: 10,
  },
  weatherSummary: {
    height: 20,
    margin: 10,
  },
  temperature: {
    height: 100,
    margin: 10,
  },

  citySelect: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'whitesmoke'
  },

  sectionContainer: {
    borderTopWidth: 0.5,
    borderColor: 'grey',
    marginLeft: 10,
    marginRight: 10
  }
});
