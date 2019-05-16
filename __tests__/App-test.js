/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import * as types from '../types';
import fetchMock from 'fetch-mock';

// Only needed if using just Jest (as per top test)
import renderer from 'react-test-renderer';
types.defaultInfo,
// Using Jest
it('renders correctly, testing using just Jest', () => {
  renderer.create(<App />);
});

// Using Jest + Enzyme
describe('<App />', () => {
  it('renders correctly, testing using Jest+Enzyme', () => {
    expect.assertions(1);
    expect(shallow(<App/>)).toMatchSnapshot();
  });
});

// Using Jest + Enzyme
describe('Text input feature', () => {
  it('has a method to update textInput in component state', () => {
    expect.assertions(2);

    const wrapper = shallow(<App />);
    const instance = wrapper.instance();

    expect(wrapper.state('textInput')).toBe(types.defaultInfo);

    instance._onTextChange('theCity');
    expect(wrapper.state('textInput')).toBe('theCity');
  });
});

describe('Fetching Data', () => {

  it('should fetch CurrentWeather data from OpenWeatherMap', async () => {
    expect.assertions(3);

    // Setup
    const wrapper  = shallow(<App />);
    const instance = wrapper.instance();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${'London'}&APPID=${types.APIToken}&units=metric`;
    const fakeResponse = {
      name: 'London',
      main: {temp:11},
      weather: [
        { main: 'clear'},
        { main: 'sunny'},
      ]
    };

    // Use fetchMock here to mock the same response every time this url is called
    // This way we are implicitly mocking the fetch API.
    fetchMock.get(url, fakeResponse);

    const response = await instance.getCurrentWeather('London');

    // Check assertions
    expect(response.name).toEqual("London");
    expect(response.main.temp).toEqual(11);
    expect(response.weather[0].main).toEqual("clear");
  });

  it('should forecast data from OpenWeatherMap', async () => {
    expect.assertions(1);

    // Setup
    const wrapper  = shallow(<App />);
    const instance = wrapper.instance();
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${'London'}&APPID=${types.APIToken}&units=metric`

    const forecasts = [
      {
        "dt": 1534852800,
        "main": {
          "temp": 290.19,
          "temp_min": 290.19,
          "temp_max": 291.928,
          "pressure": 999.46,
          "sea_level": 1018.59,
          "grnd_level": 999.46,
          "humidity": 97,
          "temp_kf": -1.74
        },
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "中雨",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 92
        },
        "wind": {
          "speed": 5.01,
          "deg": 252.501
        },
        "rain": {
          "3h": 8.56
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2018-08-21 12:00:00"
      }
    ];

    const fakeResponse = {
      "cod": "200",
      "message": 0.0119,
      "cnt": 40,
      "list": forecasts
    };

    // Use fetchMock here to mock the same response every time this url is called
    // This way we are implicitly mocking the fetch API.
    fetchMock.get(url, fakeResponse);

    const response = await instance.getForecast('London');

    // Check assertions
    expect(response.list[0].dt_txt).toEqual("2018-08-21 12:00:00");
  });

  it('should recognise string code 200 is an error', () => {
    expect.assertions(3);

    const wrapper  = shallow(<App />);
    const instance = wrapper.instance();

    const fakeResponse1 = {
      cod: '200',
      message: 'an error occurred'
    };

    const isError1  = instance.checkDataStatusOk(fakeResponse1);
    expect(isError1).toBe(true);

    const fakeResponse2 = {
      cod: 200,
      message: 'an error occurred'
    };

    const isError2  = instance.checkDataStatusOk(fakeResponse2);
    expect(isError2).toBe(true);

    const fakeResponse3 = {
      cod: 400,
      message: '...'
    };

    const isError3  = instance.checkDataStatusOk(fakeResponse3);
    expect(isError3).toBe(false);

  });

  it('should update state with current weather data', () => {
    expect.assertions(6);

    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    expect(wrapper.state('city')).toBe(types.defaultInfo);
    expect(wrapper.state('temperature')).toBe(types.defaultInfo);
    expect(wrapper.state('currentWeather')).toBe(types.defaultInfo);

    const fakeResponse = {
      name: 'London',
      main: {temp:11},
      weather: [
          { main: 'clear'},
          { main: 'sunny'},
      ]
    };

    instance.updateCurrentWeather(fakeResponse);
    expect(wrapper.state('city')).toBe('London');
    expect(wrapper.state('temperature')).toBe(11);
    expect(wrapper.state('currentWeather')).toBe('clear');

  });

});

describe('Controlling InfoModal', () => {
  it('makes sure that InfoModal is not showing by default', () => {
    expect.assertions(1);

    const wrapper = shallow(<App />);
    expect(wrapper.state('modalVisible')).toBe(false);

  });

  it('has a method to show InfoModal', () => {
    expect.assertions(1);

    const wrapper  = shallow(<App />);
    const instance = wrapper.instance();

    instance.showModal();
    expect(wrapper.state('modalVisible')).toBe(true);
  });

  it('has a method to hide InfoModal', () => {
    expect.assertions(1);

    const wrapper  = shallow(<App />);
    const instance = wrapper.instance();

    instance.hideModal();
    expect(wrapper.state('modalVisible')).toBe(false);
  });
});

