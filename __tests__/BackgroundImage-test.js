import 'react-native';
import React from 'react';
import BackgroundImage from '../BackgroundImage';
import { shallow } from 'enzyme';

// Using Jest + Enzyme
describe('<BackgroundImage />', () => {
    it('renders correctly', () => {
        expect.assertions(1);

        const currentWeatherMock = "cloudy";

        expect(shallow(<BackgroundImage currentWeather={currentWeatherMock}/>)).toMatchSnapshot();
    });

    it('renders one image when weather is rain', () => {
        expect.assertions(1);

        const currentWeatherMock = "rain";
        const wrapper = shallow(<BackgroundImage currentWeather={currentWeatherMock}/>);

        expect(wrapper.find('Image')).toHaveLength(1);
    });

    it('still renders an image when unknown weather passed as props ', () => {
        expect.assertions(1);

        const currentWeatherMock = "unknownweather";
        const wrapper = shallow(<BackgroundImage currentWeather={currentWeatherMock}/>);

        expect(wrapper.find('Image')).toHaveLength(1);
    });

    it('still renders an image when null weather passed as props ', () => {
        expect.assertions(1);

        const currentWeatherMock = null;
        const wrapper = shallow(<BackgroundImage currentWeather={currentWeatherMock}/>);

        expect(wrapper.find('Image')).toHaveLength(1);
    });
});
