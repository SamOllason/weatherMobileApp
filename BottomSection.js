import React from 'react'
import {Button, StyleSheet, TextInput, View, KeyboardAvoidingView} from "react-native";
import InfoModal from './InfoModal';

const BottomSection = ({getWeather, onTextChange, showModal, closeModal, modalVisible, currentWeather, textColour}) => {
    return(

        <KeyboardAvoidingView behavior="padding" enabled>
            <View>
                <View style={styles.sectionContainer}>
                    <View style={styles.goButtonContainer}>
                        <Button
                            onPress={getWeather}
                            title="Go!"
                            color="#841584"
                            accessibilityLabel="Get weather for city below"
                        />
                    </View>
                    <View style={styles.citySelect}>
                        <TextInput
                            style={{height: 30}}
                            placeholder="Enter city here"
                            onChangeText={(input) => onTextChange(input)}
                        />
                    </View>
                </View>

                <View style={styles.aboutButtonContainer}>
                    {/*<Button*/}
                    {/*    color="#841584"*/}
                    {/*    onPress={getWeather}*/}
                    {/*    title="Refresh"*/}
                    {/*    accessibilityLabel="Refresh weather data for chosen city"*/}
                    {/*/>*/}

                    <Button
                        onPress={showModal}
                        color="#841584"
                        title="About"
                        accessibilityLabel="See information about this app"
                    />
                </View>

                {/*<Button*/}
                {/*    onPress={() => {*/}
                {/*      Alert.alert('Coming soon!');*/}
                {/*    }}*/}
                {/*    title="Select Current Location"*/}
                {/*    accessibilityLabel="Click this to get weather in current location"*/}
                {/*/>*/}

                <InfoModal
                    modalVisible={modalVisible}
                    currentWeather={currentWeather}
                    closeModal={closeModal}
                />
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    citySelect: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'whitesmoke',
    },

    sectionContainer: {
        borderTopWidth: 0.5,
        borderColor: 'grey',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white',
        opacity: 0.8,
        // width
    },

    goButtonContainer: {
        backgroundColor: 'white',
        opacity: 1,
    },

    aboutButtonContainer: {
        // borderTopWidth: 0.5,
        // borderColor: 'grey',
        // marginTop: 5,
        // marginLeft: 10,
        // marginRight: 10,
        // backgroundColor: 'white',
        // opacity: 0.8,
        // width
    },

});

export default BottomSection;
