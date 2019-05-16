import React from 'react'
import { View, Image, StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    image: {
        flex: 1,
        resizeMode: 'stretch',
    }
});

const BackgroundImage = ({currentWeather}) => {

    const getImage = (weather) => {
        let image = require('./images/clearSky.jpg');

        if(weather) {
            if (weather.toLowerCase() === 'clouds') {
                image = require('./images/cloudy2.jpg');
            }

            if (weather.toLowerCase() === 'rain' || weather.toLowerCase() === 'drizzle') {
                image = require('./images/rain.jpg');
            }

            if (weather.toLowerCase() === 'snow') {
                image = require('./images/snow.jpg');
            }

            if (weather.toLowerCase() === 'clear') {
                image = require('./images/clearSky.jpg');
            }

            if (weather.toLowerCase() === 'mist') {
                image = require('./images/mist.jpg');
            }

            if (weather.toLowerCase() === 'haze') {
                image = require('./images/haze.jpg');
            }

            if (weather.toLowerCase() === 'fog') {
                image = require('./images/fog.jpg');
            }

            if (weather.toLowerCase() === 'dust') {
                image = require('./images/dust.jpg');
            }
        }

        return image;
    };

    const source = getImage(currentWeather);

    return (
            <View style={styles.container} >
                <Image
                    style={styles.image}
                    source={source}
                />
            </View>
        );
};

export default BackgroundImage;
