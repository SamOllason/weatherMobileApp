import React from 'react'
import {Button, StyleSheet, TextInput, View, KeyboardAvoidingView} from "react-native";
import InfoModal from './InfoModal';

const BottomSection = ({getWeather, onTextChange, showModal, closeModal, modalVisible, currentWeather, textColour}) => {
    return(

        <KeyboardAvoidingView behavior="padding" enabled>
            <View>
                <View style={styles.sectionContainer}>
                    <Button
                        onPress={getWeather}
                        title="Choose City"
                        color=""
                    />
                    <View style={styles.citySelect}>
                        <TextInput
                            style={{height: 30, color: textColour}}
                            placeholder="Enter city here"
                            onChangeText={(input) => onTextChange(input)}
                        />
                    </View>
                </View>

                <View style={styles.sectionContainer}>
                    <Button
                        onPress={getWeather}
                        title="Refresh"
                        accessibilityLabel="Click this to refresh weather data for chosen city"
                    />

                    <Button
                        onPress={showModal}
                        title="About"
                        accessibilityLabel="Click here for information about this app"
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
        marginRight: 10
    }
});

export default BottomSection;
