import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CurrentWeatherPane = ({city, currentWeather, temperature}) => {
    const colour = currentWeather.toLowerCase() === 'snow' ? 'grey': 'whitesmoke';
    const temp   = temperature === "--" ? temperature : `${temperature} ℃`;

    return(
        <View style={styles.topContainer}>
            <View styles={styles.city}>
                <Text style={{fontSize: 20, color: colour}}>{city}</Text>
            </View>

            <View style={styles.temperature}>
                <Text style={{fontSize: 50, color: colour}}>{temp}</Text>
            </View>

            <View style={styles.weather}>
                <Text style={{fontSize: 15, color: colour}}>{currentWeather}</Text>
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
