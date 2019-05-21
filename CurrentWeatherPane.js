import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import * as types from './types';

const CurrentWeatherPane = ({city, currentWeather, temperature, textColour}) => {
    const temp   = temperature === types.defaultInfo ? temperature : `${temperature} ℃`;

    return(
        <View style={styles.topContainer}>
            <View styles={styles.city}>
                <Text style={{fontSize: 20, color: textColour}}>{city}</Text>
            </View>


            <View style={styles.temperature}>
                <Text style={{fontSize: 50, color: textColour}}>{temp}</Text>
            </View>


            <View style={styles.weather}>
                <Text style={{fontSize: 15, color: textColour}}>{currentWeather}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topContainer: {
        marginTop: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    city: {
        height: 100,
        margin: 5,
    },
    weather: {
        height: 20,
        margin: 5,
    },
    temperature: {
        height: 70,
        margin: 5,
    },
});

export default CurrentWeatherPane;
