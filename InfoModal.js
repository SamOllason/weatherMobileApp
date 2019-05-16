import React from 'react';
import {View, Text, Modal, Alert, StyleSheet, Platform, Linking, Button} from 'react-native';
import BackgroundImage from './BackgroundImage';

const InfoModal = ({modalVisible, closeModal}) => {
    const platform = Platform.select({
        ios: 'iOS',
        android: 'Android',
    });

    const projectLink =
        <Text style={{color: 'blue'}}
              onPress={() => Linking.openURL('https://github.com/SamOllason/mobileWeatherApp')}>
            here
        </Text>;

    const openWeatherMapLink =
        <Text style={{color: 'blue'}}
              onPress={() => Linking.openURL('https://openweathermap.org/api')}>
            OpenWeatherMap
        </Text>;

    return(
        <View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <BackgroundImage
                    currentWeather="clear"
                />
                <View style={styles.cont}>
                    <View style={styles.titleContainer}>
                        <Text style={{fontSize: 20}}>About</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text>This is a cross-platform weather app developed with React Native.
                            You are currently using the {platform} version of the app.
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text>Functionality: you can enter the name of a city and see the current weather
                            and conditions in that city. You will also see a 5-day/3-hour forecast for
                            the city's weather conditions.
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text>Data: this data is provided by {openWeatherMapLink}. There is currently limit
                            on of 60 requests per minute (across all users!) so please be patient.
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text>
                            This application was developed by Sam Ollason. All the code for this project
                            is open sourced and available to view {projectLink} for more information
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text>
                            For privacy and support information please see {projectLink}.
                        </Text>
                    </View>
                    <Button
                        onPress={closeModal}
                        title="Close"
                        accessibilityLabel="Close the information screen"
                    />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        margin: 20,
        marginTop: 100,
    },
    titleContainer: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    textContainer: {
        marginTop: 30,
        marginBottom: 30,
    }
});

export default InfoModal;
