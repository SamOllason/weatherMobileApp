/**
 * @format
 */

import 'react-native';
import React from 'react';
import DetailsList from '../DetailsList';
import { shallow } from 'enzyme';

// Using Jest + Enzyme
describe('<DetailsList />', () => {
    it('renders correctly, testing using Jest+Enzyme', () => {
        expect.assertions(1);

        const mockForecast = [ {
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
        }];

        const mockCurrentWeather = "cloudy";

        expect(shallow(<DetailsList forecast={mockForecast} currentWeather={mockCurrentWeather}/>)).toMatchSnapshot();
    });
});