import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, FlatList, TextInput } from "react-native";


const UselessTextInput = () => {
    //const [text, onChangeText] = React.useState("");
    //const [number, onChangeNumber] = React.useState(null);


    return (
        <View>
            <Text>Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Spot name"
            />

            <Text>Location</Text>
            <TextInput
                style={styles.input}
                placeholder="Location"
            />

            <Text>Photo (url)</Text>
            <TextInput
                style={styles.input}
                placeholder="Photo"
            />


        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0.5,
        padding: 10,
    },
});

export default UselessTextInput;