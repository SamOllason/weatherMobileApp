import React from 'react'
import { Button, StyleSheet, Platform, TextInput, View, KeyboardAvoidingView } from "react-native";
import InfoModal from './InfoModal';

const BottomSection = ({getWeather, onTextChange, showModal, closeModal, modalVisible, currentWeather, textColour}) => {
    return(

        <KeyboardAvoidingView behavior="padding" enabled>
            <View>
                <View style={styles.citySelect}>
                    <TextInput
                        style={{height: Platform.OS === 'android' ? 40 : 20}}
                        placeholder="Enter city here"
                        onChangeText={(input) => onTextChange(input)}
                    />
                </View>

                <View style={styles.goButtonContainer}>
                    <Button
                        onPress={getWeather}
                        title="Go!"
                        color="#841584"
                        accessibilityLabel="Get weather for city below"
                    />
                </View>


                <View style={styles.aboutButtonContainer}>
                    <Button
                        onPress={showModal}
                        // color="#841584"
                        // color={"#841584"}
                        title="Info"
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
        padding: 15,
        borderWidth: 1,
        backgroundColor: 'white',


        borderTopWidth: 0.5,
        borderColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        opacity: 0.9,
        // width
    },

    goButtonContainer: {
        marginTop: 10,
        backgroundColor: 'white',
        opacity: 0.7,
        marginLeft: 10,
        marginRight: 10,
    },

    aboutButtonContainer: {
        marginTop: 10,
        backgroundColor: 'white',
        opacity: 0.7,
        marginLeft: 10,
        marginRight: 10,
    },

});

export default BottomSection;
