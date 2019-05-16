import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";

const ForecastList = ({forecast, currentWeather}) => {

    // Given 15:21:13 return "3pm"
    const getHours = (time) => {
        const hh     = time.split(":")[0];
        const hhInt  = parseInt(hh, 10);

        // Want "12pm" instead of "0pm" and "12am" instead of "0am"
        const hhIntClock = hhInt === 0 || hhInt === 12 ? 12 : hhInt % 12;

        const afternoon  = hhInt >= 12;
        const suffix     = afternoon ? "pm" : "am";

        return `${hhIntClock}${suffix}`;
    };

    // Convert "YYYY-MM-DD HH:MM:SS" to Day of week and friendlier time e.g. "Mon 3pm"
    const getDay = (fullDate) => {
        const date   = new Date(fullDate);

        const time   = getHours(fullDate.split(' ')[1]);
        const dayNum = date.getDay();

        switch(dayNum) {
            case 0 :
                return `Sun ${time}`;
            case 1:
                return `Mon ${time}`;
            case 2:
                return `Tue ${time}`;
            case 3:
                return `Wed ${time}`;
            case 4:
                return `Thu ${time}`;
            case 5:
                return `Fri ${time}`;
            case 6:
                return `Sat ${time}`;
            default:
                return "error";
        }
    };

    let colour = '';

    if(currentWeather === "--") {
        colour = 'whitesmoke';
    } else {
        console.log({currentWeather});
        colour = currentWeather.toLowerCase() === 'snow' ? 'grey': 'whitesmoke';
    }

    return(
        <ScrollView>
            <View style={styles.weekContainer}>
                {forecast.map((point) => {
                    const day = getDay(point.dt_txt);
                    const uri = `http://openweathermap.org/img/w/${point.weather[0].icon}.png`;

                    console.log({uri});
                    return <View style={styles.weekdayContainer} key={point.dt_txt}>
                        <View style={styles.dateTime}>
                            <Text style={{fontSize: 15, color: colour}}>{day}</Text>
                        </View>
                        <View style={styles.weather}>
                            <Text style={{fontSize: 15, color: colour}}>
                                {point.weather[0].main}
                            </Text>
                            <Image
                                source={{uri: uri}}
                                style={styles.icon}
                            />
                        </View>

                        <View style={styles.tempMax}>
                            <Text style={{fontSize: 15, fontWeight: 'bold', color: colour}}>{point.main.temp_max}</Text>
                        </View>

                        <View style={styles.tempMin}>
                            <Text style={{fontSize: 15, color: colour}}>{point.main.temp_min}</Text>
                        </View>
                    </View>
                })}
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    weekContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    weekdayContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        padding: 10,
        margin: 1,
    },
    dateTime: {
        flex: 2,
    },
    weather: {
        flex: 2,
        flexDirection: 'row',
    },
    tempMax: {
        flex: 1,
    },
    tempMin: {
        flex: 1,
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 5
    }
});

export default ForecastList;
