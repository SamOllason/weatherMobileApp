import 'react-native';
import React from 'react';
import InfoModal from '../InfoModal';
import { shallow } from 'enzyme';

// Using Jest + Enzyme
describe('<InfoModal />', () => {
    it('renders correctly', () => {
        expect(shallow(<InfoModal/>)).toMatchSnapshot();
    });
});