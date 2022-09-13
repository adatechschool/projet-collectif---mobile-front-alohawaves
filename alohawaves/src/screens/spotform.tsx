import React, { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, Button, Alert} from "react-native";
    
export default function SpotFormScreen() {
    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            <TextInput
                style={styles.input}
                placeholder="Spot name"
                keyboardType='default'
            />
            <TextInput
                style={styles.input}
                placeholder="Spot place"
                keyboardType='default'
            />
            <TextInput
                style={styles.input}
                placeholder="Difficulty level (1 to 5)"
                keyboardType='numeric'
            />
            <View style={styles.fixToText}>
                <Button
                    title = "Submit"
                    color= "#b0cff7"
                    onPress={()=>Alert.alert('Do you want to add this new post ?')}
                />
            </View>
        </SafeAreaView>
    )
}
    
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0.5,
        padding: 10,
        },
    title: {
        textAlign: 'center',
        },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'center',
        }
});